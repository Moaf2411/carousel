import styles from './wrapper.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { useEffect,useRef } from 'react'

const Wrapper = props => {
    const router = useRouter()
    const ref = useRef()

    useEffect(()=>{
        
        for(let i of Array.from(ref['current'].children)){
            let path = router.pathname.split('/')
            path = path[path.length-1]
            
            if(path.length != 0 && i.href.split('/').includes(path)){
                i.classList.add(styles.active)
            }
            else if(Array.from(i.classList).includes(styles.active)){
                i.classList.remove(styles.active)
            }
            else if(path.length === 0 && i.text === 'Home'){
                i.classList.add(styles.active)
            }
            
        }
    },[router.pathname])


    return(
        <div className={styles.body}>
            <div className={styles.head}>
                <ul className={styles.navbar} ref={ref}>
                    <Link href='/' ><a className={styles.link}>Home</a></Link>
                    <Link href='/carousel' ><a className={styles.link}>Carousel</a></Link>
                    <Link href='/slideshow' ><a className={styles.link}>Slideshow</a></Link>
                </ul>
            </div>

            {props.children}

            <div className={styles.foot}>
                Developed by Mohammadreza Afshari @2022
            </div>
        </div>
    )

}


export default Wrapper