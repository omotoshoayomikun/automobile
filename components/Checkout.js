import styles from '../styles/Checkout.module.css'
const Checkout = ({ setShow }) => {
    return (
        <div className={styles.container}>
            <div className={styles.modal} onClick={() => setShow(false)}></div>
            <div className={styles.wrapper}>
                <div>
                    <h2 className={styles.heading}>Inspection</h2>
                    <table style={{ fontSize: '16px' }}>
                        <tbody>
                            <tr>
                                <th>
                                    Price:
                                </th>
                                <td>
                                    $20,000
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tr_tr}>
                                    Brand:
                                </th>
                                <td>
                                    BENZ
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.tr_tr}>
                                    Model:
                                </th>
                                <td>
                                    2018 Model 3
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className={styles.heading}>Please Enter Details Correctly</h2>
                    <div className={styles.formBox}>
                        <div style={{padding: '10px'}} className={styles.form_cont}>
                            {/* <div className={styles.fff}> */}
                            <label className={styles.label}>Full Name</label>
                            <input type='text' className={styles.input} />
                            {/* </div> */}
                        </div>
                        <div className={styles.form_cont}>
                            <div className={styles.fff}>
                                <label className={styles.label}>Phone</label>
                                <input type='text' className={styles.input} />
                            </div>
                            <div className={styles.fff}>
                                <label className={styles.label}>Email</label>
                                <input type='text' className={styles.input} />
                            </div>
                        </div>
                        <button className={styles.button__}>NEXT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout