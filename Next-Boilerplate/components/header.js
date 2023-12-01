import Link from 'next/link';
import style from '../public/styles/header.module.css';
const Header = () =>{
    return (
        <div className='' >
            <div className={style.container}>
                <div className={style.nav}>
                <span>
                    <Link href='/' >Converter</Link></span>
                <span>
                    <Link href='/resizer' >Resizer</Link></span>
                </div>
            
            </div>
        </div>
    )
}
export default Header;