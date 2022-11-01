import './valorProduto.css';
import Cursos from '../../global/cursos';
import { Link } from "react-router-dom";

export default function ValorProduto(props) {

    let curso = Cursos[props.idx];

    return (
        <div className='valorProduto'>

            <h1>{curso.nome}</h1>
            <h5>{curso.descricao}</h5>
            <h3>DE <span className='oldPrice'>R${((curso.valor)*1.4).toFixed(2).replace(".",',')}</span> POR APENAS 12X DE R${((curso.valor)/12).toFixed(2).replace(".",',')}</h3>
            <h3>PROMOÇÃO POR TEMPO LIMITADO!</h3>
            <h4 style={{margin: '4% 0'}}><Link to="/registro" className="CTA CTAMobile">QUERO APROVEITAR ESSA OPORTUNIDADE!</Link></h4>

        </div>
    );
}