import { useRef, useState } from "react"
import ProductCard from "../component/ProductCard"
import {GameList} from "../data/data"
import styles from "../styles/styles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



const GamePage: React.FC<{}> = () => {
    const [data, setData] = useState(GameList)
    const inputRef = useRef<HTMLInputElement>(null)
    const [renderedItemsQuantity, setRenderedItemsQuantity] = useState(data.length)
    console.log(renderedItemsQuantity)

    const filterList = (platform:string) => {
        setData(GameList.filter(item => item.platform.includes(platform)))
    }

    const showAll = () => {
        setData(GameList)
    }


    const searchGame = () => {
        if (inputRef.current?.value !== ''){
            setData(GameList.filter(item => item.title.toLowerCase().includes((inputRef.current?.value || '').toLowerCase())))
            console.log(inputRef.current?.value || '')
        }else if(inputRef.current?.value == ''){
            alert('Enter a game title')
        }
    }


    const searchGameByKeyDown = (event?: any) => {
        if (inputRef.current?.value !== '' && event.key == 'Enter'){
            setData(GameList.filter(item => item.title.toLowerCase().includes((inputRef.current?.value || '').toLowerCase())))
            console.log(inputRef.current?.value || '')
        }else if(inputRef.current?.value == '' && event.key== 'Enter'){
            alert('Enter a game title')
        }
    }




    return(
        <div className={styles.GamePage}>
            <div className={styles.search}>
                <input placeholder="Enter a game title" className={styles.searchInput} type="text" ref={inputRef} onKeyDownCapture={(event) => searchGameByKeyDown(event)}/>
                <button onClick={()=> searchGame()} className={styles.searchBtn}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                <div style={{position: 'relative'}}>
                    <p>quantity:</p>
                    <select onChange={e => setRenderedItemsQuantity(+e.target.value)} className={styles.selectOp}>
                        <option value={data.length}>All</option>
                        <option value="9">9</option>
                        <option value="6">6</option>
                    </select>
                </div>
            </div>
   

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
                {data.slice(0, renderedItemsQuantity).map(item => 
                <ProductCard id={item.id} platform={item.platform} title={item.title} img={item.img} price={item.price} key={item.id}/>)}
            </div>

            </div>


        </div>
    )
}

export default GamePage