import styles from './Invite.module.css'

import oba from './../../assets/vmeste3.JPG'

const Invite = () => {
  return (
    <div className={styles.containerInvite}>
      <div className={styles.topBlock}>
        <span className={styles.tittle}>Дорогие и близкие!</span>
        <span className={styles.centerText}>
          Мы хотим разделить с вами один из 
          самых<br /> важных и радостных дней 
          в нашей жизни — <br />праздник настоящей любви.
        </span>
        <span className={styles.bottomText}>Приглашаем Вас стать частью<br/> нашей свадьбы </span>
      </div>
{/* Плавающий квадрат с фото */}
      <div className={styles.photoSquare}>
  <img src={oba} alt="Пара" className={styles.photoInside} />
  
  <div className={styles.textUnderPhoto}>
    <span className={styles.line1}>Любите</span>
    <span className={styles.line2}>каждый день всё сильнее</span>
  </div>
</div>
      <div className={styles.bottomBlock}></div>
    </div>
  )
}

export default Invite