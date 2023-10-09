import { Link } from 'react-router-dom'
import styles from '../styles/about.module.css'


const AboutPage: React.FC<{}> = () => {


    return(
        <div className={styles.AboutPage}>
            
           <p className={styles.mainP}>About Us</p>
           <div  className={styles.aboutDiv}>
                <p className={styles.aboutText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <Link to={'/*'} className={styles.aboutBtn}>Learn More</Link>
            </div>
            

        </div>
    )
}

export default AboutPage