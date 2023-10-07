import { useState } from "react"
import ProductCard from "../component/ProductCard"
import {AccessoriesList} from "../data/data"
import styles from "../styles/styles.module.css"

const AccessoriesPage: React.FC<{}> = () => {
    const [data, setData] = useState(AccessoriesList)


    return(
        <div>
            <div className={styles.games}>
                

            <div className={styles.cardSection}>
                {data.map(item => 
                <ProductCard id={item.id} platform={item.brand} title={item.title} img={item.img} price={item.price} key={item.id}/>)}
            </div>

            </div>


        </div>
    )
}

export default AccessoriesPage