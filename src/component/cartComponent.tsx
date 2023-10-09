import React, { useEffect }  from "react"
import styles from "../styles/cart_box.module.css"
import { CartBtn } from "../styles/styled"
import { useAppSelector } from "../hooks/hooks"
import { RootState } from "../store"
import { Link } from "react-router-dom"




const CartComponent: React.FC<{}>  = () => {
    const price = useAppSelector((state: RootState) => state.cart.price)

    return(
        <div className = {styles.cartComp}>
            <p>total price: {price} ₾</p>
            <CartBtn ><Link to={'/*'} style={{ textDecoration: 'none', color: 'black'}}>Purchase</Link></CartBtn>
        </div>

    )
}

export default CartComponent