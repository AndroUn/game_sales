import React from "react"
import styles from "../styles/footer.module.css"




const Footer: React.FC<{}>  = () => {


    return(
        <div className={styles.footerContainer}>
            <div className={styles.fcolumn}>
                    Here you can use rows and columns to organize your footer content.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>

            <div className={styles.scolumn}>
                <a href='#'>Pricing</a>
                <a href='#'>Settings</a>
                <a href='#'>Orders</a>
                <a href='#'>Help</a>
            </div>

            <div className={styles.thcolumn}>
                <a href='#'>New York, NY 10012, US</a>
                <a href='#'>info@example.com</a>
                <a href='#'> + 01 234 567 88</a>
                <a href='#'> + 01 234 567 89</a>
            </div>
        </div>

    )
}

export default Footer