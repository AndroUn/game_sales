import { Link, Outlet } from "react-router-dom"
import styles from "../styles/styles.module.css"


const LinkLayout: React.FC<{}> = () => {
    return(
        <div>
            <div className={styles.linkWrapper}>
                <Link className={styles.links} to={'/'}>Home</Link>
                <Link className={styles.links} to={'/games'}>Games</Link>
                <Link className={styles.links} to={'/computer'}>Computer</Link>
                <Link className={styles.links} to={'/consoles'}>Consoles</Link>
                <Link className={styles.links} to={'/about'}>About</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default LinkLayout