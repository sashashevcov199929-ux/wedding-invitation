import styles from './Place.module.css'
import shater from './../../assets/shater.jpg'


const Place =()=>{ 
    return <div className={styles.containerPlace}>
        <div className={styles.containerText}>
            <span className={styles.tittle}>МЕСТО ПРОВЕДЕНИЯ</span>
            <span className={styles.textCenter}>Log House</span>
            <span className={styles.textBottom}>г.Нижний Новгород,<br/> Aртельная 21A </span>
        </div>
        <div className={styles.containerFoto}>
            <img src={shater} alt="" />
        </div>
        <div className={styles.containerBtn}><a href="https://yandex.ru/navi/org/logkhaus/1684863788?si=33pu2yz2u40xvgfkt2kbme1m4c" target="_blank"
    rel="noopener noreferrer" className={styles.btn}>ПОСМОТРЕТЬ НА КАРТЕ</a></div>
    </div>
}
export default Place;