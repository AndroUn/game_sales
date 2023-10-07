import { useCallback, useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/slider.module.css'
import { Slides } from "../interfaces/Slides.interface"


const SliderCarousel: React.FC<any> = ({slides, parentWidth}) => {
    const timerRef:any = useRef(null)
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const dots = document.getElementsByClassName(styles.dot)

    const dotsArray = Array.from(dots)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
        dots[0].classList.remove(styles.active)
        dotsArray.map(dot => dot.classList.remove(styles.active))
        dots[newIndex].classList.add(styles.active)
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        dotsArray.map(dot => dot.classList.remove(styles.active))
        dots[newIndex].classList.add(styles.active)
    },[currentIndex, slides])

    const goToSlide = (slideIndex:number) => {
        setCurrentIndex(slideIndex)
        dotsArray.map(dot => dot.classList.remove(styles.active))
        dots[slideIndex].classList.add(styles.active)
    }

    const getSlideBackground = (slideIndex:number) => ({
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentWidth}`,
    })

    const getSlidesContainerWidth = () => ({
        width: parentWidth * slides.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)` 
    })

    useEffect(() => {
        dots[0].classList.add(styles.active)

        if(timerRef.current){
            clearTimeout(timerRef.current)
        }

        if(currentIndex > 0){
            dots[0].classList.remove(styles.active)
        }

        timerRef.current = setTimeout(() => {
            dots[0].classList.remove(styles.active)
            goToNext();
        }, 10000)

        return () => clearTimeout(timerRef.current)
    },[goToNext])


    return(
        <div className={styles.wrapper}>
            <div className={styles.prev} onClick={()=> goToPrevious()}><FontAwesomeIcon icon={faCaretLeft} /></div>
            <div className={styles.next} onClick={()=> goToNext()}><FontAwesomeIcon icon={faCaretRight} /></div>

            <div className={styles.slideContainer}>
                <div className={styles.slideInner} style = {getSlidesContainerWidth()}>
                    {slides.map((slide:Slides, slideIndex:number) => (
                        <div key={slideIndex} className={styles.slide} style={getSlideBackground(slideIndex)}>
                            <div className={styles.slideText}>{slide.title}</div>
                        </div>
                    ) )}
                </div>
            </div>

            <div className={styles.dotsContainer}>
                {slides.map(( slide:Slides, slideIndex:number) => 
                    (<div key={slideIndex} className={styles.dot} onClick={()=> goToSlide(slideIndex)}><FontAwesomeIcon icon={faCircle} size="xl"/></div>)
                )}
            </div>
        </div>
    )
}


export default SliderCarousel