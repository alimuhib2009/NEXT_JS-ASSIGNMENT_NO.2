import styles from './hero.module.css'
const heroSection = () => {
 return(
    <div>
        <div className={styles.main}>
            <div className={styles.content}>
                <h2 className={styles.tittle}>Navigating the digital land<br />scape  for success</h2>
                <p className={styles.desc}>Our digital marketing agency helps businesses grow and <br />succeed online through a range of  services including<br />  SEO, PPC, social media marketing, and content creation.</p>
                <button className={styles.btn1}>Book a consultation</button>
            </div>
        </div>
    </div>
 )
}

export default heroSection;