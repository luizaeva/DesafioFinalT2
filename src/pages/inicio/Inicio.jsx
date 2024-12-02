import s from './inicio.module.scss'
import imagem1 from '../../assets/imagem1doacao.png'
import imagem2 from '../../assets/imagem2doacao.png'
import imagem3 from '../../assets/imagem3doacao.png'
import imagem4 from '../../assets/imagem4doacao.png'

export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2> VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO </h2>
            </section>

            <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                  <section className={s.cardsMotivos}>
                  <section>
                    <img src={imagem1} alt="Imagem ilustrando circulo social de quatro pessoas" />
                    <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>

                  </section>

                  <section>
                    <img src={imagem2} alt='imagem ilustrando pessoa lendo'></img>
                    <p>Estimula o hábito de leitura e o aprendizado contínuo.</p>
                  </section>

                  <section>
                    <img src={imagem3} alt="imagem ilustrando 6 pessoas transformando o mundo"/>
                    <p>Fornece conhecimento e inspiração, permitindo que individuos tranformem suas vidas.</p>
                  </section>

                  <section>
                    <img src={imagem4} alt="imagem ilustrando balança que representa igualdade" />
                    <p>Garante que todos, independentemente de sua condição,tenham oportunidade de aprendizado.</p>
                  </section>

                  </section>
            </section>


        </main>
    )
}