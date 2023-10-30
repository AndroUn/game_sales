import { Link } from 'react-router-dom'
import styles from '../styles/about.module.css'
import style2 from '../styles/styles.module.css'

const ErrorPage = () => {
    return(
        <div className={style2.errorDiv}>
            <h1 className={styles.mainP }>Oops!</h1>
            <h3 style={{fontFamily: " 'Montserrat', sans-serif"}}>Something went wrong</h3>
            <Link className={style2.errorBtn} to={'/'}>Back To The HomePage</Link>
        </div>
    )
}

export default ErrorPage