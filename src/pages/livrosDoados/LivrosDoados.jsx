import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados (){
    return(

        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>

            <section className={s.containerCards}>

                <section>
                    <img src={livroProtagonista} alt="Imagem do livro O Protagonista de Susanne Andrade"/>
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>

                </section>

            </section>
        </section>
    )
}