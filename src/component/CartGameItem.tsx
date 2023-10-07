import React  from "react"
import styles from "../styles/cart_box.module.css"
import CardInterface from "../interfaces/Card.interface"
import { useAppDispatch } from '../hooks/hooks'
import { deleteItemFromCart, minusPrices } from "../store/cart/cart.slice"
import { CartBtn } from "../styles/styled"


const CartGameItem: React.FC<CardInterface>  = ({id, img, platform, price, title}) => {
    const dispatch = useAppDispatch();

    const deleteItem = () => {
        dispatch(deleteItemFromCart(id))
        dispatch(minusPrices(price))
    }


    return(
        <div key={id} className = {styles.cartItem}>
            <img src={img} alt={title} />
            <div className={styles.cartItemData}>
                <p> title: {title}</p>
                <p> platform: {platform}</p>
                <p> price: {price}</p>
            </div>
            <CartBtn onClick={()=> deleteItem()}>decline</CartBtn>
        </div>

    )
}

export default CartGameItem