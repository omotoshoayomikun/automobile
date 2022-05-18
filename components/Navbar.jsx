import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { handleSlide } from '../redux/SidebarSlice';

const Navbar = () => {

    const [view, setView] = useState(true)


    const dispatch = useDispatch();

    const handleToggle = () => {
        setView(!view)
        dispatch(handleSlide(view))
        console.log(view)
    }

    return (
        <div className={styles.container}>
            <div className={styles.item}>Logo</div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <Link href='/' passHref>
                            Home
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href='/' passHref>
                            Shop
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href='/' passHref>
                            Sell Car
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href='/' passHref>
                            Blog
                        </Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href='/' passHref>
                            Customer Care
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.sidebar} onClick={() => handleToggle()}>
                <FaBars />
            </div>
        </div>
    )
}

export default Navbar