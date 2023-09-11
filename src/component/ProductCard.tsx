import React from 'react'
import styles from "../styles/card.module.css"
import CardInterface from "../interfaces/Card.interface"

const ProductCard: React.FC<CardInterface>  = ({id, img, title, price, platform}) => {
  return (
    <div key={id}>
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={img} alt={title} />
            </div>
                <p className={styles.title}>{title}</p>
                <p>Platform: {platform}</p>
            <div className={styles.box}>
                <button>Add to Cart</button>
                <div className={styles.price}><span>{price}</span> gel </div>
            </div>
        </div>
    </div>
  )
}


export default ProductCard