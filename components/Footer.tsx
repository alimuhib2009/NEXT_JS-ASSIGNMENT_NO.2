import style from './footer.module.css'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const footer = () => {
    return (
        <div className={style.footer}> 
            <div className={style.row}>
               <Link href="#" className={style.title}>E Commerce</Link>
               <div className={style.links}>
                <ul>
                    <li><Link href='#'>Home</Link></li>
                    <li><Link href='#'>About</Link></li>
                    <li><Link href='#'> Pricing</Link></li>
                    <li><Link href='#'>contact us</Link></li>
                </ul>
               </div>
               <div>
                <i className={style.icon}><FaFacebook /></i>
                <i className={style.icon}><FaLinkedin/></i>
                <i className={style.icon}><FaTwitter/></i>
               </div>
            </div>
            <div className={style.row2}>
                <div className={style.leftsection}>
                    <h1 className={style.heading}>Contact us:</h1>
                    <p className={style.desc}>Email: info@positivus.com</p>
                    <p className={style.desc}>Phone: 555-567-8901</p>
                    <p className={style.desc}>Address: 1234 Main St
                    Moonstone City,<br /> Stardust State 12345</p>
                </div>
                <div className={style.rightsection}>
                    <input type="email" name="email" placeholder='Email' className={style.email} />
                    <button className={style.btn}>Subscribe to News</button>
                </div>
            </div>
            <div className={style.last}>
            <hr />
            <p className={style.lastdesc}>© 2023 Positivus. All Rights Reserved.</p>
            <Link href='#' className={style.Privacy}>Privacy Policy</Link>
            </div>
        </div>
    )
}

export default footer