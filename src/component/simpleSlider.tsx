import React, { useEffect, useRef, useState } from "react"
import { SlidesI, SlidesListProps } from "../interfaces/Slides.interface";
import styles from "../styles/simpleSlider.module.css"
import { slides } from "../data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons'

const SimpleSlider: React.FC<SlidesListProps> = ({slides}:SlidesListProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const dots = document.getElementsByClassName(styles.dot)
    const timerRef:any = useRef(null)

    const dotsArray = Array.from(dots)

    const nextSlide = () => {
        dotsArray.map(dot => dot.classList.remove(styles.active))

        if(currentIndex == slides.length - 1){
            setCurrentIndex(0)
            dots[0].classList.add(styles.active)
        }else if(currentIndex < slides.length){
            setCurrentIndex(currentIndex + 1)
            dots[currentIndex + 1].classList.add(styles.active)
        }
    }

    const prevSlide = () => {
        dotsArray.map(dot => dot.classList.remove(styles.active))

        if(currentIndex == 0){
            setCurrentIndex(slides.length - 1)
            dots[slides.length - 1].classList.add(styles.active)
        }else if(currentIndex < slides.length){
            setCurrentIndex(currentIndex - 1)
            dots[currentIndex - 1].classList.add(styles.active)
        }
    }

    const goToSlide = (slideIndex:number) => {
        setCurrentIndex(slideIndex)
        dotsArray.map(dot => dot.classList.remove(styles.active))
        dots[slideIndex].classList.add(styles.active)
    }
   
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
            nextSlide();
        }, 10000)

        return () => clearTimeout(timerRef.current)
    },[nextSlide])

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                     <div className={styles.slide}>
                        <img src={slides[currentIndex].url} />
                        <p>{slides[currentIndex].title}</p>
                    </div>
            </div>
            <button onClick={() => prevSlide()} className={styles.prev}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button onClick={() => nextSlide()} className={styles.next}><FontAwesomeIcon icon={faArrowRight} /></button>
                
            <div className={styles.dotsContainer}>
                {slides.map((slide:SlidesI, slideIndex:number) => 
                    (<div key={slideIndex} className={styles.dot} onClick={()=> goToSlide(slideIndex)}><FontAwesomeIcon icon={faCircle} size="xl"/></div>)
                )}
            </div>
        </div>
    )
}


export default SimpleSlider