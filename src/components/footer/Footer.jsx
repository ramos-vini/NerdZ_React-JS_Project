import './footer.css';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from "react-router-dom";

export default function Footer(params) {
    return (
        <nav className='footerNav'>
            <div className='footerNavDiv1'>
                <section className='footerNavDiv1Sec1'>
                    <h4>Nosso Objetivo</h4>
                    <p>A NerdZ foi criada para levar ao público da cultura geek conhecimentos aprofundados sobre seus assuntos favoritos, sejam videogames, séries, filmes, HQs ou ramos da tecnologia. Tudo que um Nerd precisa ele encontra aqui!</p>
                    <p><EmailOutlinedIcon fontSize='small'></EmailOutlinedIcon> <i>atendimento@nerdz.com.br</i></p>
                </section>

                <section className='footerNavDiv1Sec2'>
                    <h4>Baixe nosso App</h4>
                    <a href><img src={require('../../assets/img/app-store.png')} alt="App disponível na App Store" style={{ width: '170px' }} /></a>
                    <a href><img src={require('../../assets/img/google-play.png')} alt="App disponível na Google Play" style={{ width: '170px' }} /></a>
                </section>
            </div>

            <div className='footerNavDiv2'>
            <h2 className='logo logoFooter'><Link to="/" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'initial'});}}>NerdZ</Link></h2>
            </div>
        </nav>
    );
}