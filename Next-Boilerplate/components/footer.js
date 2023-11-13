import style from '../public/styles/footer.module.css';
const Footer = () =>{
    return(<div className={style.container}>
        <div className={style.rowItem}>
        <div>Converter</div>
        <div>Formatter</div>
        <div>Resizer</div>
        </div>
        <hr/><br/>
        <span>&copy;2023 DigitalPrep All Rights Reserved.</span>
    </div>)
}

export default Footer;
