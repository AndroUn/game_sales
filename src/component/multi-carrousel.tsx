import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GameList } from "../data/data"
import styles from "../styles/simpleSlider.module.css"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const MultiCarrouselSlider: React.FC<{}>  = () => {
    

    return(
        <div className={styles.mcontainer}>
            <div className={styles.inner}>
            {GameList.map((item)=> (
                <div className={styles.imageBox}>
                    <img src={item.img}/>
                    <h3>{item.title}</h3>
                </div>
            ))}
            </div>
            <button className={styles.prev}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button className={styles.next}><FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    )
}

export default MultiCarrouselSlider