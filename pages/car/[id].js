import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../../styles/Car.module.css'
import { FaAngleUp } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Checkout from '../../components/Checkout'
import Sidebar from '../../components/Sidebar'



const Car = () => {

    const [index, setindex] = useState(0)
    const [show, setShow] = useState(false)

    const images = [
        '/img/img-6.jpg',
        '/img/slider1.jpg',
        '/img/img-2.jpg',
        '/img/car9.jpg',
        '/img/car-5.jpg',
    ]

    const handleSlide = (direction) => {
        if (direction === 'l') {
            setindex(index !== 0 ? index - 1 : images.length - 1)
            console.log('Lenght', images.length)
            console.log('Lenght - 1', images.length - 1)
        }
        if (direction === 'r') {
            setindex(index === images.length - 1 ? 0 : index + 1)
        }
    }


    useEffect(() => {
        // const interval = setInterval(()=>{
        //     if(index < images.length - 1) {
        //         setindex(index + 1)
        //     } else {
        //         setindex(0)
        //     }

        //     return() => {
        //         clearInterval(interval)
        //     }
        // }, 3000)
    }, [index])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.wrapper}>
                        <div className={styles.arrow} style={{ left: '0' }} onClick={() => handleSlide('l')}>
                            <Image src='/img/arrowl.png' layout='fill' />
                        </div>
                        <div className={styles.img_wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                            {images.map((image, i) => (
                                <div className={styles.img} key={i}>
                                    <Image src={image} alt='image' layout='fill' objectFit='cover' />
                                </div>
                            ))}
                        </div>

                        <div className={styles.arrow} style={{ right: '0' }} onClick={() => handleSlide('r')}>
                            <Image src='/img/arrowr.png' layout='fill' />
                        </div>
                    </div>
                    <div className={styles.price_wrap} onClick={() => setShow(true)}>
                        <div className={styles.angleUp}><FaAngleUp /></div>
                        <div>$46,300 Purchase price </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.heading}>2018 Model 3</h1>
                    <div style={{ fontWeight: 'bold', textAlign: 'center' }}>Model 3 Long Range Rear-Wheel Drive</div>
                    <div className={styles.df}>
                        <div className={styles.m_r}>
                            <h2 className={styles.ppp}>325<span className={styles.fz}> mi</span></h2>
                            <span>Range</span>
                        </div>
                        <div className={styles.m_r}>
                            <h2 className={styles.ppp}>325<span className={styles.fz}> mi</span></h2>
                            <span>Range</span>
                        </div>
                        <div className={styles.m_r}>
                            <h2 className={styles.ppp}>325<span className={styles.fz}> mi</span></h2>
                            <span>Range</span>
                        </div>
                    </div>
                    <h1 className={styles.heading}>Key Features</h1>
                    <div>
                        <ul className={styles.ul}>
                            <li>Pearl White Paint</li>
                            <li>Pearl White Paint</li>
                            <li>All Black Premium Interior</li>
                            <li>Front and Rear Heated Seats</li>
                        </ul>
                    </div>
                </div>
            </div>
            {show && (<Checkout setShow={setShow} />)}
        </>
    )
}

export default Car

Car.getLayout = function PageLayout(page) {
    return (
        <>
            <Navbar />
            <Sidebar />
            {page}
        </>
    )
}
