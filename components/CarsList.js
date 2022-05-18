import styles from '../styles/CarsList.module.css';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import Cars from './Cars';


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
    return (
        <div className={styles.container}>
            {
                carList.map((carsItem, i) => (
                    <div key={i}>
                        <h1 className={styles.heading}>{carsItem.category}</h1>
                        <div className={styles.wrapper}>
                            {carsItem.cars.map((car, i) => (
                                <Cars car={car} i={i} />
                            ))}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default CarList