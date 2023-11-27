import { useParams } from "react-router-dom"
import { GameList } from "../data/data"
import styles from "../styles/ProductPageStyles.module.css"
import { useAppDispatch } from "../hooks/hooks"
import { addItemToCart, sumPrices } from "../store/cart/cart.slice"
import ProductCard from "../component/ProductCard"


const ProductParamPage = () => {
    const param = useParams()
    const dispatch = useAppDispatch();

    const game = GameList.find(game => game.title == param.title)

    if(!game){
        return(
            <div>Info not found</div>
        )
    }

    const AddCartItem = ()=> {
        const CartItem = {
            id: game.id,
            img: game.img,
            title: game.title,
            platform: game.platform,
            price: game.price
        }
        console.log(CartItem)
        dispatch(addItemToCart(CartItem))
        dispatch(sumPrices(game.price))
    }

    return(
        <div className={styles.productPage}>
            <div className={styles.product}>
                <img src={game.img} />
                <div className={styles.textInfo}>
                    <h1>{game.title}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div>
                        <button onClick={()=> AddCartItem()}>Add to Cart</button>
                        <p className={styles.price}>{game.price} GEL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductParamPage