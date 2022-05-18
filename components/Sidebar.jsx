import Link from 'next/link'
import { FaCar, FaComment, FaHome, FaPhone, FaShopify, FaShoppingCart } from 'react-icons/fa'
import styles from '../styles/Sidebar.module.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {

    const quantity = useSelector(state => state.sidebar.bar)

    return (
        <>
            {quantity && (
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <ul className={styles.listItem}>
                            <li className={styles.list}>
                                <Link href='/' passHref>
                                    <div className={styles.dff}>
                                        <i className={styles.icons}><FaHome /> </i>
                                        Home
                                    </div>
                                </Link>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.dff}>
                                    <i className={styles.icons}><FaShoppingCart /> </i>
                                    Shop
                                </div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.dff}>
                                    <i className={styles.icons}><FaCar /> </i>
                                    Sell Car
                                </div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.dff}>
                                    <i className={styles.icons}><FaComment /> </i>
                                    Blog
                                </div>
                            </li>
                            <li className={styles.list}>
                                <div className={styles.dff}>
                                    <i className={styles.icons}><FaPhone /> </i>
                                    Customer Care
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default Sidebar