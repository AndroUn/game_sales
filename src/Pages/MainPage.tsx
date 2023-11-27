import {slides, TabsContent} from "../data/data"
import TabsComponent from "../component/tabs"
import styles from "../styles/styles.module.css"
import { useEffect, useState } from "react"
import SimpleSlider from "../component/simpleSlider"
import MultiCarrouselSlider from "../component/multi-carrousel"
import Carrousel from "../component/react-multi-carrousel"




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



    return(
        <div style={{paddingTop: '70px'}}>
            <SimpleSlider slides={slides}/>

            <p className={styles.carouselHeader}>Most Popular</p>
 
            <Carrousel />

            <TabsComponent key={TabsContent[TabsIndex].id} id={TabsContent[TabsIndex].id} title={TabsContent[TabsIndex].title}  descr={TabsContent[TabsIndex].descr}  img={TabsContent[TabsIndex].img} price={TabsContent[TabsIndex].price}/>


            <div className={styles.tabHeaders}>
            {TabsContent.map((item, index) => 
                    <div onClick={()=> switchTab(index)} key={item.id} className={styles.tabHeader}>
                        <img className={styles.tabHeaderImage} alt={item.title} src={item.img} />
                        <p className={styles.tabHeaderTitle}>{item.title}</p>
                    </div>)}
            </div>

   


        </div>
    )
}

export default MainPage