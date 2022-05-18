import { useState } from 'react'
import Link from 'next/link'

import styles from '../styles/Cars.module.css'
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { FaImages } from 'react-icons/fa';

const Cars = ({ car, i }) => {
    const [view, setView] = useState(false)
    return (
        <>
            <div className={styles.car__card} key={i}>
                <div className={styles.img_details_cont} onMouseOver={() => setView(true)} onMouseLeave={() => setView(false)}>
                    {view && (
                        <div className={styles.img_details}>

                            <div className={styles.details_wrap}>
                                <div className={styles.detail}>
                                    <div>
                                        <i className={styles.detail_icon}><FaImages /></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.img__wrapper}>
                    <Image src={car.img} alt='image' layout='fill' objectFit='cover' className={styles.img} />
                </div>
                <div className={styles.title}>
                    <div className={styles.text}>{car.text}</div>
                    <div className={styles.amount}>${car.amount}</div>
                    <div className={styles.button_cart}>
                        <Link href='/car/1' passHref>
                            <button className={styles.button}>
                                SHOW DETAILS
                            </button>
                        </Link>
                        <button className={styles.button}> <i className={styles.icons}><FaShoppingCart /> </i>  BUY</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cars

