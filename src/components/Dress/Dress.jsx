import styles from './Dress.module.css'
import man from './../../assets/man.png'
import woman from './../../assets/woman.png'
import { useEffect, useState } from 'react';

const Dress = () => { 
  const weddingDate = new Date(2026, 7, 1, 15, 30, 0);

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft(null);
        return;
      }

      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.containerDress}>
      <div className={styles.containerText}>
        <span className={styles.text}>СТИЛЬ ОДЕЖДЫ</span>
      </div>

      <span className={styles.sectionTitle}>Мужчины</span>
      <div className={styles.containerMan}>
        <img src={man} alt="Мужчины" />
      </div>

      <span className={styles.sectionTitle}>Девушки</span>
      <div className={styles.containerWoman}>
        <img src={woman} alt="Девушки" />
      </div>

      <div className={styles.textUnderPhotos}>
        Мы просим Вас,<br/>
        выбрать образы в чёрных тонах, для нас это очень важно.<br/>
        Мужчины: чёрный низ + белый либо черный верх 🖤🤍<br/>
        Девушки: чёрный цвет 🖤
      </div>

      <div className={styles.timer}>
        <span className={styles.timerTitle}>До свадьбы осталось</span>

        {timeLeft ? (
          <div className={styles.timerNumbers}>
            <span>{timeLeft.days} д</span>
            <span>{timeLeft.hours} ч</span>
            <span>{timeLeft.minutes} м</span>
            <span>{timeLeft.seconds} с</span>
          </div>
        ) : (
          <span>Сегодня свадьба 💍</span>
        )}
      </div>
    </div>
  )
}

export default Dress;