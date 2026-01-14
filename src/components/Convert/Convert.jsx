import styles from './Convert.module.css'


const Convert = ({onScrollDown}) => { 
  return (
    <div className={styles.sectionConvert}>
      <div className={styles.convertBlock}> {/* Кнопки внутри блока */}
        <div className={styles.buttonsContainer} onClick={onScrollDown}>
          <button className={styles.convertBtn}  >
            Открыть конверт
          </button>
          
        </div></div>
    </div>
  )
}

export default Convert;