import React, { useEffect }  from "react"
import styles from "../styles/styles.module.css"
import TabsInterface from "../interfaces/TabsItem.interface"




const TabsComponent: React.FC<TabsInterface>  = ({id, title, descr, img}) => {

    

    return(
        
        <div key={id} className={styles.tabsContent}>
                <div className={styles.tabsDescr}><h5>{title}</h5>
                   {descr}
                   <br/>
                   <button className={styles.tabsBtn}>Buy</button>
                </div>
                <img src={img} />
            </div>
    )
}

export default TabsComponent