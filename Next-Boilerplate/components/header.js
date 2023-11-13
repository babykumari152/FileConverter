import style from '../public/styles/header.module.css';
const Header = () =>{
    return (
        <div className='' >
            <div className={style.container}>
                <div className={style.nav}>
                <span>Converter</span>
                <span>Resizer</span>
                </div>
            
            </div>
        </div>
    )
}
export default Header;