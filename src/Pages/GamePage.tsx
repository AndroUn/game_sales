import { useState } from "react"
import ProductCard from "../component/ProductCard"
import {GameList} from "../data/data"
import CardInterface from "../interfaces/Card.interface"
import styles from "../styles/styles.module.css"

const GamePage: React.FC<{}> = () => {
    const [data, setData] = useState(GameList)

    const filterList = (platform:string) => {
        setData(GameList.filter(item => item.platform.includes(platform)))
    }

    const showAll = () => {
        setData(GameList)
    }

    return(
        <div>
            <div className={styles.games}>
                <div className={styles.menu}>
                    <ul className={styles.menuList}>
                        <li onClick={()=>showAll()}>All</li>
                        <li onClick={()=>filterList('PS5')}>PS5 games</li>
                        <li onClick={()=>filterList('PS4')}>PS4 games</li>
                        <li onClick={()=>filterList('Xbox Series')}>Xbox Series X/S games</li>
                        <li onClick={()=>filterList('Xbox One')}>Xbox One games</li>
                        <li onClick={()=>filterList('Nintendo Switch')}>Nintendo Switch games</li>
                    </ul>
                </div>

            <div className={styles.cardSection}>
                {data.map(item => 
                <ProductCard id={item.id} platform={item.platform} title={item.title} img={item.img} price={item.price} key={item.id}/>)}
            </div>

            </div>
        </div>
    )
}

export default GamePage