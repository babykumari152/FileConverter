import style from '../public/styles/footer.module.css';
import Link from 'next/link';
const Footer = () =>{
    return(<div className={style.container}>
        <div className={style.rowItem}>
        <div>
            <Link href='/'>Converter</Link></div>
        <div>
            <Link href='/resizer' >Formatter</Link></div>
        <div><Link href='/resizer' >Resizer</Link></div>
        </div>
        <hr/><br/>
        <span>&copy;2023 DigitalPrep All Rights Reserved.</span>
    </div>)
}

export default Footer;
