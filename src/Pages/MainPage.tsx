import SliderCarousel from "../component/slider"
import {slides, TabsContent} from "../data/data"
import Carrousel from "../component/react-multi-carrousel"
import TabsComponent from "../component/tabs"
import styles from "../styles/styles.module.css"
import { useEffect, useState } from "react"




const MainPage: React.FC<{}> = () => {
    const [TabsIndex, setTabsIndex] = useState(0)
    const tabs = document.getElementsByClassName(styles.tabHeader)

    useEffect(() => {
        tabs[0].classList.add(styles.active)

        if (TabsIndex > 0){
            tabs[0].classList.remove(styles.active)
        }
    }, [])


    const switchTab = (tabIndex:number) => {
        Array.from(tabs).map(e => e.classList.remove(styles.active))
        tabs[tabIndex].classList.add(styles.active)
        setTabsIndex(tabIndex)
    }

    const containerStyles = {
        width: '1200px',
        height: '420px',
        margin: '0 auto',
    }


    return(
        <div style={{paddingTop: '70px'}}>
            <div style={containerStyles}>
                <SliderCarousel slides={slides} parentWidth = {1200}/>
            </div>

            <br />

            <p className={styles.carouselHeader}>Most Popular</p>
            <Carrousel />


            <TabsComponent key={TabsContent[TabsIndex].id} id={TabsContent[TabsIndex].id} title={TabsContent[TabsIndex].title}  descr={TabsContent[TabsIndex].descr}  img={TabsContent[TabsIndex].img} />


            <div className={styles.tabHeaders}>
            {TabsContent.map((item, index) => 
                    <div onClick={()=> switchTab(index)} key={item.id} className={styles.tabHeader}>
                        <img className={styles.tabHeaderImage} src={item.img} />
                        <p className={styles.tabHeaderTitle}>{item.title}</p>
                    </div>)}
            </div>

   


        </div>
    )
}

export default MainPage