import React, { useEffect }  from "react"
import styles from "../styles/cart_box.module.css"
import { CartBtn } from "../styles/styled"
import { useAppSelector } from "../hooks/hooks"
import { RootState } from "../store"




const CartComponent: React.FC<{}>  = () => {
    const price = useAppSelector((state: RootState) => state.cart.price)

    return(
        <div className = {styles.cartComp}>
            <p>total price: {price} ₾</p>
            <CartBtn>Purchase</CartBtn>
        </div>

    )
}

export default CartComponent