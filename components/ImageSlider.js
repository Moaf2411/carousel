import styles from './ImageSlider.module.css'
import { useSelector } from 'react-redux'
import { useState,useRef,useEffect } from 'react'

var dist = 0

const ImageSlider = props => {
    const images = useSelector(state => state.imshow.images)
    const [current,setCurrent] = useState(0)
    const list = useRef()
    const [high,setHigh] = useState(0)

    
    useEffect(()=>{
        if(list != undefined){
        setTimeout(window.addEventListener('resize',function(){
            setHigh(Math.floor(list['current'].clientWidth/120))
        }),1000)
    }
    },[])

    
    useEffect(()=>{
        setHigh(Math.floor(list['current'].clientWidth/120))
    },[current])

    
    
    const goleft = () => {
        if(current === 0)return
        setCurrent(current-1)
        if(dist===0)return
        dist = dist + 120
        list['current'].style.transform = `translateX(${dist}px)`
    }
    

    const goright = () => {
        if(current === images.length-1)return
        setCurrent(current+1)
        if( current >= images.length - high )return
        dist = dist - 120
        list['current'].style.transform = `translateX(${dist}px)`
    }
    
    

    return(
        <div className={styles.wrapper}>
            <div className={styles.imwrapper}>
                <img src={images[current]} className={styles.current} />
            </div>
            <div className={styles.hide}>
                <div className={styles.left} onClick={goleft} />
                <div className={styles.right} onClick={goright} />

                <ul className={styles.list} ref={list}>
                    {images.map(i => 
                                    {
                                        if(i === images[current]){return <li className={`${styles.image} ${styles.selected}`}> <img src={i} /></li>}
                                        else{return <li className={`${styles.image}`}> <img src={i} /></li>}
                                    })}
                </ul>
            </div>
        </div>
    )
}



export default ImageSlider