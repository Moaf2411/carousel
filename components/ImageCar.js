import styles from './ImageCar.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const ImageCar = props => {
    const images = useSelector(state=>state.imshow.images)
    const [currentImage,setCurrentImage] = useState(0)
    const [prevImage,setPrevImage] = useState(images.length - 1)
    const [nextImage,setNextImage] = useState(1)

    function goright(){
        setTimeout(function(){
            setPrevImage(currentImage)
            setCurrentImage(nextImage)
            if(nextImage + 1 == images.length){setNextImage(0)}
            else{setNextImage(nextImage+1)}
        },210)
    }

    function goleft(){
        setTimeout(function(){
            setNextImage(currentImage)
            setCurrentImage(prevImage)
            if(prevImage-1<0){setPrevImage(images.length-1)}
            else{setPrevImage(prevImage-1)}
        },210)
    }




    return(

        <div className={styles.wrapper}>

            <div className={styles.goright} onClick={goright} />
            <div className={styles.goleft} onClick={goleft} />
            <div className={styles.current}>
                <img src={images[currentImage]}/>
            </div>

        </div>
    )
}


export default ImageCar