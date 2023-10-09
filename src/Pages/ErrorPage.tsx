import styles from '../styles/about.module.css'

const ErrorPage = () => {
    return(
        <div style={{paddingTop: '70px'}}>
            <h1 className={styles.mainP }>Oops!</h1>
            <h3 style={{textAlign: 'center', fontFamily: " 'Montserrat', sans-serif"}}>Something went wrong</h3>
        </div>
    )
}

export default ErrorPage