import styles from './Time.module.css'
import rings from './../../assets/rings.png'
import bokal from './../../assets/bokal.png'
import heart from './../../assets/heart.png'

const Time = () => {
  return (
    <div className={styles.containerTime}>
      <div className={styles.top}>
        <div className={styles.containerRings}>
          <img src={rings} alt="" />
        </div>
        <div className={styles.containerBokal}>
          <img src={bokal} alt="" />
        </div>
        <div className={styles.containerHeart}>
          <img src={heart} alt="" />
        </div>
<span className={styles.tittle}>ТАЙМИНГ</span>
<div className={styles.start}><span className={styles.time}>15:30</span> <p className={styles.text}>Сбор гостей</p></div>
<span className={styles.tochk}>........................................................................</span>
<div className={styles.start}><span className={styles.time}>16:00</span> <p className={styles.text}>Начало церемонии</p></div>
<span className={styles.tochk}>........................................................................</span>
<div className={styles.start}><span className={styles.time}>17:00</span> <p className={styles.text}>Праздничный банкет</p></div>
<span className={styles.tochk}>........................................................................</span>
<div className={styles.start}><span className={styles.time}>21:00</span> <p className={styles.text}>Финал. Танцпол</p></div>
        {/* SVG волна вниз */}
        <svg
  className={styles.wave}
  viewBox="0 0 1440 60"
  preserveAspectRatio="none"
>
  <path
    d="
      M0,0
      C120,40 240,60 360,40
      480,20 600,0 720,10
      840,20 960,60 1080,40
      1200,20 1320,0 1440,10
      L1440,60
      L0,60
      Z
    "
    fill="#fff5ef"
  />
</svg>
      </div>
    </div>
  )
}

export default Time