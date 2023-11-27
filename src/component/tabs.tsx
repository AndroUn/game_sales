import React, { useEffect }  from "react"
import styles from "../styles/styles.module.css"
import TabsInterface from "../interfaces/TabsItem.interface"
import { addItemToCart, sumPrices } from "../store/cart/cart.slice";
import { useAppDispatch } from "../hooks/hooks";




const TabsComponent: React.FC<TabsInterface>  = ({id, title, descr, img, price}) => {
    const dispatch = useAppDispatch();



    const AddTabsItem = ()=> {
        const TabsItem = {
            id: id,
            img: img,
            title: title,
            price: price
        }
        dispatch(addItemToCart(TabsItem ))
        dispatch(sumPrices(price))
    }
    

    return(
        <div key={id} className={styles.tabsContent}>
                <div className={styles.tabsDescr}><h5>{title}</h5>
                   {descr}
                   <p>Price: {price} GEL</p>
                   <button onClick={() => AddTabsItem()} className={styles.tabsBtn}>Buy</button>
                </div>
                <div className={styles.tabsMainImage}>
                    <img src={img} />
                </div>
            </div>
    )
}

export default TabsComponent