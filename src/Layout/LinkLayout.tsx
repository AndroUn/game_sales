import { Link, Outlet } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useAppSelector } from "../hooks/hooks"
import styles from "../styles/styles.module.css"
import { CartBox, CartCloseBtn } from "../styles/styled"
import CardInterface from "../interfaces/Card.interface"
import { RootState } from "../store"
import CartComponent from "../component/cartComponent"
import CartGameItem from "../component/CartGameItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons'
import Footer from "../component/Footer"



const LinkLayout: React.FC<{}> = () => {
    const [cartDisplay, setCartDisplay] = useState<string>('none')
    const cart = useAppSelector((state: RootState) => state.cart.cart)

    const openCart = () => {
        if (cartDisplay === 'none'){
            setCartDisplay('block')
        }else{
            setCartDisplay('none')
        }
    }


    useEffect(()=> {
       if (cart.length > 0) setCartDisplay('block')
    },[cart.length])

    return(
        <div>
            <div className={styles.linkWrapper}>
                <Link className={styles.links} to={'/'}>Home</Link>
                <Link className={styles.links} to={'/games'}>Games</Link>
                <Link className={styles.links} to={'/consoles'}>Consoles</Link>
                <Link className={styles.links} to={'/accessories'}>Computer Accessories</Link>
                <Link className={styles.links} to={'/about'}>About</Link>
                <a className={styles.links} style={{cursor: 'pointer'}} onClick={() => openCart()}><FontAwesomeIcon icon={faCartShopping} /></a>
            </div>

            {cartDisplay === 'block' && 
                <CartBox display={cartDisplay}>
                    <CartCloseBtn onClick={() => openCart()}><FontAwesomeIcon icon={faXmark} /></CartCloseBtn>
                    {cart.map((el:CardInterface) => <CartGameItem img={el.img} platform={el.platform} price={el.price} title={el.title} id={el.id} key={el.id}/>)}
                    {(cart.length === 0) ? <p style={{textAlign: 'center', fontSize: '17px'}}>Your cart is empty</p> : <CartComponent />}
                </CartBox>}       
            

            <Outlet />

            <Footer />
        </div>


    )
}

export default LinkLayout