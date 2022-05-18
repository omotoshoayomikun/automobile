import styles from '../styles/Slider.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa';



const Slider = () => {

    const [index, setIndex] = useState(0)

    const images = [
        '/img/img-6.jpg',
        '/img/img-5.jpg',
        '/img/img-4.jpg',
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            if (index < 2) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }, 3000)

        return () => {
            clearInterval(interval)
        }

    }, [index])

    const handleArrow = (direction) => {
        if (direction === "l") {
            setIndex(index !== 0 ? index - 1 : 2)

        }
        if (direction === "r") {
            setIndex(index === 2 ? 0 : index + 1)
        }

    }

    return (

        <div className={styles.container}>
            <div className={styles.arrow} style={{ left: '0px' }} onClick={() => handleArrow('l')}>
                <Image src='/img/arrowl.png' layout='fill' />
            </div>
            <div className={styles.img_wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
                {images.map((image, i) => (
                    <div className={styles.imgContainer} key={i}>
                        <Image src={image} layout='fill' objectFit='cover' />
                    </div>
                ))}
            </div>
            <div className={styles.arrow} style={{ right: '0px' }} onClick={() => handleArrow('r')}>
                <Image src='/img/arrowr.png' layout='fill' />
            </div>
            <div className={styles.text_wrapper}>
                <h1 className={styles.header}>WELCOME TO AUTO CAR</h1>
                <p className={styles.sub_header}>Getting the best car you could ever dream of here at motobolic</p>
                <div className={styles.box}>
                    <select className={styles.select}>
                        <option className={styles.selectItem}>Select Brand</option>
                        <option className={styles.selectItem}>Benz</option>
                        <option className={styles.selectItem}>BMW</option>
                        <option className={styles.selectItem}>Ferrari</option>
                        <option className={styles.selectItem}>BMW</option>
                    </select>
                    <select className={styles.select}>
                        <option className={styles.selectItem}>Select Model</option>
                        <option className={styles.selectItem}>Benz</option>
                        <option className={styles.selectItem}>BMW</option>
                        <option className={styles.selectItem}>Ferrari</option>
                        <option className={styles.selectItem}>BMW</option>
                    </select>
                    <select className={styles.select}>
                        <option className={styles.selectItem}>Select Year</option>
                        <option className={styles.selectItem}>2022</option>
                        <option className={styles.selectItem}>2021</option>
                        <option className={styles.selectItem}>2020</option>
                        <option className={styles.selectItem}>2019</option>
                    </select>
                    <select className={styles.select}>
                        <option className={styles.selectItem}>Select Type Of Car</option>
                        <option className={styles.selectItem}>Benz</option>
                        <option className={styles.selectItem}>BMW</option>
                        <option className={styles.selectItem}>Ferrari</option>
                        <option className={styles.selectItem}>BMW</option>
                    </select>
                    <button className={styles.button__}> <FaSearch /> FIND</button>
                </div>
            </div>
        </div>
    )
}

export default Slider