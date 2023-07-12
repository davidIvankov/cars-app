import styles from '../styles/BackgroundImage.module.css'

export default function BackgroundImageLayout(){ 
    return(
    <>
    <div className={styles.main} 
    style={{
      backgroundImage: 'url("https://wallpaperaccess.com/full/6191768.jpg")',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1 className={styles.h1}>Create your own car collection. Start now.</h1>
      <h2 className={styles.h2}>Add list of your favorite cars models and manufacturers.</h2>

    </div>
    </>
  )
}