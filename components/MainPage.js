import styles from './MainPage.module.css'
import Link from 'next/link'


const MainPage = props => {


    return(
        <div className={styles.wrapper}>
            <h1 className={styles.heading1}> Image Slideshow and Image Carousel </h1>
            <h3 className={styles.heading3}> Implemented using Next.js and React </h3>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h3>Slideshow</h3>
                    <p>you can access the slideshow via the link below or using the navbar</p>
                    <Link href='/slideshow' ><a className={styles.link}>To Slideshow</a></Link>
                </div>
                <div className={styles.card}>
                    <h3>Carousel</h3>
                    <p>you can access the carousel via the link below or using the navbar</p>
                    <Link href='/carousel' ><a className={styles.link}>To Carousel</a></Link>
                </div>
            </div>

        </div>
    )
}


export default MainPage