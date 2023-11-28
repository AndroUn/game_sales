import React from 'react'
import styles from "../styles/card.module.css"
import CardInterface from "../interfaces/Card.interface"
import cartSlice, { addItemToCart, sumPrices } from '../store/cart/cart.slice'
import { useAppDispatch } from '../hooks/hooks'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const ProductCard: React.FC<CardInterface>  = ({id, img, title, price, platform}) => {
    const dispatch = useAppDispatch();



    const AddCartItem = ()=> {
        const CartItem = {
            id: id,
            img: img,
            title: title,
            platform: platform,
            price: price
        }
        console.log(CartItem)
        dispatch(addItemToCart(CartItem))
        dispatch(sumPrices(price))
    }



    return (
        <div key={id}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img src={img} alt={title} />
                </div>
                <Link style={{textDecoration: 'none'}} to={`/params/${title}`}><p className={styles.title}>{title}</p></Link>
                    <p>Platform: {platform}</p>
                <div className={styles.box}>
                    <button onClick={()=> AddCartItem()}>Add to Cart</button>
                    <div className={styles.price}><span>{price}</span> gel </div>
                </div>
            </div>
        </div>
    )
}


export default ProductCard