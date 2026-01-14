import styles from './Data.module.css'
import boryaPhoto from '../../assets/boryaSmall.jpg'
import alinaPhoto from '../../assets/alina.jpg'

import React, { forwardRef, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Data = forwardRef((_, ref) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
}

  return (
    <motion.div
      ref={(node) => {
        containerRef.current = node
        if (ref) ref.current = node
      }}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={styles.containerData}
    >
      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
        }}
        className={styles.tittle}
      >
        Боря и Алина
      </motion.div>

      {/* Фото блок */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }
        }}
        className={styles.containerFoto}
      >
        <div className={styles.photoColumn}>
          <span className={styles.quoteTop}>—интересно кто будет <br /> моей женой?</span>
          <div className={styles.photoWrapper}>
            <img src={boryaPhoto} alt="Боря" className={styles.photo} />
          </div>
          <span className={styles.placeholder}></span>
        </div>

        <div className={styles.photoColumn}>
          <span className={styles.placeholder}></span>
          <div className={styles.photoWrapper}>
            <img src={alinaPhoto} alt="Алина" className={styles.photo} />
          </div>
          <span className={styles.quoteBottom}>—ей буду я</span>
        </div>
      </motion.div>

      {/* Август */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } }
        }}
        className={styles.avgust}
      >
        Август 2026
      </motion.div>

      {/* Календарь */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.5, duration: 0.6 } }
        }}
        className={styles.calendar}
      >
        <div className={styles.day}>
          <span className={styles.weekday}>ПН</span>
          <span className={styles.date}>27</span>
        </div>

        <div className={styles.day}>
          <span className={styles.weekday}>ВТ</span>
          <span className={styles.date}>28</span>
        </div>

        <div className={styles.day}>
          <span className={styles.weekday}>СР</span>
          <span className={styles.date}>29</span>
        </div>

        <div className={styles.day}>
          <span className={styles.weekday}>ЧТ</span>
          <span className={styles.date}>30</span>
        </div>

        <div className={styles.day}>
          <span className={styles.weekday}>ПТ</span>
          <span className={styles.date}>31</span>
        </div>

        <div className={`${styles.dayShwet} ${styles.active}`}>
          <span className={styles.weekday}>СБ</span>
          <span className={styles.date}>1</span>
          <span className={styles.heart}></span>
        </div>

        <div className={styles.day}>
          <span className={styles.weekday}>ВС</span>
          <span className={styles.date}>2</span>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default Data;