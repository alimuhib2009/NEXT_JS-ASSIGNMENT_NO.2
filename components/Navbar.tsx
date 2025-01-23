import Link from 'next/link';
import Styles from './navbar.module.css'
const header = () => {
    return (
        <div>
            <div className={Styles.navbar}>
                <Link href={"#"} className={Styles.tittle}>E Commerce</Link>
                <ul className={Styles.navwrapper}>
                    <li><Link href={"#"} className={Styles.link}>Home</Link></li>
                    <li><Link href={"#"} className={Styles.link}>About</Link></li>
                    <li><Link href={"#"} className={Styles.link}>Pricing</Link></li>
                    <li><Link href={"#"} className={Styles.link}>Contact Us</Link></li>
                    <button className={Styles.btn}>Request a qoute</button>
                </ul>
            </div>
        </div>
    )
}

export default header;