import facebooklogo from '../../assets/facebooklogo.png'
import twitterlogo from '../../assets/twitterlogo.png'
import youtubelogo from '../../assets/youtubelogo.png'
import linkedinlogo from '../../assets/linkedinlogo.png'
import instagramlogo from '../../assets/instagramlogo.png'
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""> <img src={facebooklogo} alt="logo do facebook"/> </a>
                    <a href=""> <img src={twitterlogo} alt="logo do twitter"/> </a>
                    <a href=""> <img src={youtubelogo} alt="logo do youtube"/> </a>
                    <a href=""> <img src={linkedinlogo} alt="logo do linkedin"/> </a>
                    <a href=""> <img src={instagramlogo} alt="logo do instagram"/> </a>
                </nav>
            </section>

            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai na Web para fins educativos - 2024 </p>

            </section>


        </footer>
    )
}