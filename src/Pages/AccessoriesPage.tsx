import { useRef, useState } from "react"
import ProductCard from "../component/ProductCard"
import {AccessoriesList} from "../data/data"
import styles from "../styles/styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const AccessoriesPage: React.FC<{}> = () => {
    const [data, setData] = useState(AccessoriesList)
    const inputRef = useRef<HTMLInputElement>(null)
    const [renderedItemsQuantity, setRenderedItemsQuantity] = useState(data.length)
    console.log(renderedItemsQuantity)

    const filterList = (brand:string) => {
        setData(AccessoriesList.filter(item => item.brand.includes(brand)))
    }

    const showAll = () => {
        setData(AccessoriesList)
    }


    const searchAccessorie = (e?:any) => {
        if (inputRef.current?.value !== '' && e.key === 'Enter'){
            setData(AccessoriesList.filter(item => item.title.toLowerCase().includes((inputRef.current?.value || '').toLowerCase())))
            console.log(inputRef.current?.value || '')

        }else if(inputRef.current?.value == '' && e.key === 'Enter'){
            alert('Enter a game title')
        }
    }

    return(
        <div className={styles.accessories}>
            <div className={styles.search}>
                <input placeholder="Enter a game title" className={styles.searchInput} type="text" ref={inputRef} onKeyDown={(e)=> searchAccessorie(e)}/>
                <button onClick={()=> searchAccessorie()} className={styles.searchBtn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <div style={{position: 'relative'}}>
                </div>
            </div>
   

            <div className={styles.games}>
                <div className={styles.menu}>
                    <ul className={styles.menuList}>
                        <li onClick={()=>showAll()}>All</li>
                        <li onClick={()=>filterList('Razer')}>Razer</li>
                        <li onClick={()=>filterList('HyperX')}>HyperX</li>
                        <li onClick={()=>filterList('Trust')}>Trust</li>
                        <li onClick={()=>filterList('2E')}>2E</li>
                    </ul>
                </div>

            <div className={styles.cardSection}>
                {data.map(item => 
                <ProductCard id={item.id} platform={item.brand} title={item.title} img={item.img} price={item.price} key={item.id}/>)}
            </div>

            </div>


        </div>
    )
}

export default AccessoriesPage