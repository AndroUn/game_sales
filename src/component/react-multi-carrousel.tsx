import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';
import {GameList} from "../data/data";
import styles from "../styles/styles.module.css"


const Carrousel: React.FC<{}> = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 767, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          }
    };

    return(

        <Carousel
                responsive={responsive}
                autoPlay={true}
                showDots={true}
                infinite={true}
                partialVisible={false}
                containerClass={styles.carousel}
                dotListClass={styles.carouselDot}
                >

         {GameList.map((item, key) => 
            <div key={key} style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}>
                <ProductCard id={item.id} platform={item.platform} title={item.title} img={item.img} price={item.price} key={item.id}/>
            </div>
            )} 
        </Carousel>
    )
}

export default Carrousel