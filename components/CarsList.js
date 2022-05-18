import styles from '../styles/CarsList.module.css';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import Cars from './Cars';
import { useState } from 'react';
import Link from 'next/link';

import { FaImages } from 'react-icons/fa';


const carList = [
    {
        category: 'NEW CARS',
        cars: [
            {
                img: '/img/car-1.jpg',
                text: 'LAMBORGHINI',
                amount: '4000,000'
            },
            {
                img: '/img/car-6.jpg',
                text: 'LEXUS GS F',
                amount: '32,090,000'
            },
            {
                img: '/img/car12.jpg',
                text: 'CLASSIC BENS',
                amount: '40,000,009,00'
            },
            {
                img: '/img/img-4(1).jpg',
                text: 'RED SLIM FERRARI',
                amount: '2,000,000'
            },
            {
                img: '/img/car-2.jpg',
                text: 'FERRARI RED CAR',
                amount: '8,000,000'
            },
            {
                img: '/img/img-1.jpg',
                text: 'TOYOTA',
                amount: '12,000,000'
            },
            {
                img: '/img/car11.jpg',
                text: 'FORD',
                amount: '18,000,000'
            },
        ]
    },
    {
        category: 'USED CARS',
        cars: [
            {
                img: '/img/car-1.jpg',
                text: 'LAMBORGHINI',
                amount: '4000,000'
            },
            {
                img: '/img/car-6.jpg',
                text: 'LEXUS GS F',
                amount: '32,090,000'
            },
            {
                img: '/img/car12.jpg',
                text: 'CLASSIC BENS',
                amount: '40,000,009,00'
            },
            {
                img: '/img/img-4(1).jpg',
                text: 'RED SLIM FERRARI',
                amount: '2,000,000'
            },
            {
                img: '/img/car-2.jpg',
                text: 'FERRARI RED CAR',
                amount: '8,000,000'
            },
            {
                img: '/img/img-1.jpg',
                text: 'TOYOTA',
                amount: '12,000,000'
            },
            {
                img: '/img/car11.jpg',
                text: 'FORD',
                amount: '18,000,000'
            },
        ]
    },
    {
        category: 'FEATURE',
        cars: [
            {
                img: '/img/car-1.jpg',
                text: 'LAMBORGHINI',
                amount: '4000,000'
            },
            {
                img: '/img/car-6.jpg',
                text: 'LEXUS GS F',
                amount: '32,090,000'
            },
            {
                img: '/img/car12.jpg',
                text: 'CLASSIC BENS',
                amount: '40,000,009,00'
            },
            {
                img: '/img/img-4(1).jpg',
                text: 'RED SLIM FERRARI',
                amount: '2,000,000'
            },
            {
                img: '/img/car-2.jpg',
                text: 'FERRARI RED CAR',
                amount: '8,000,000'
            },
            {
                img: '/img/img-1.jpg',
                text: 'TOYOTA',
                amount: '12,000,000'
            },
            {
                img: '/img/car11.jpg',
                text: 'FORD',
                amount: '18,000,000'
            },
        ]
    },
]

const CarList = () => {

    const [view, setView] = useState(false)
    return (
        <div className={styles.container}>
            {
                carList.map((carsItem, i) => (
                    <div key={i}>
                        <h1 className={styles.heading}>{carsItem.category}</h1>
                        <div className={styles.wrapper}>
                            {carsItem.cars.map((car, i) => (
                                <div className={styles.car__card} key={i}>
                                    <div className={styles.img_details_cont}>
                                        {/* {view && ( */}
                                            <div className={styles.img_details}>

                                                <div className={styles.details_wrap}>
                                                    <div className={styles.detail}>
                                                        <div>
                                                            <i className={styles.detail_icon}><FaImages /></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                         {/* )} */}
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
                            ))}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default CarList