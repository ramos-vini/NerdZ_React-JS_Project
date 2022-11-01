import './garantia.css';
import { Link } from "react-router-dom";

// TODO: Garantia de 7 dias + CTA nº3

export default function Garantia(params) {
    return (
        <div className='divGarantia'>
            <div>
                <img src={require('../../assets/img/garantia.png')} style={{ width: '200px' }} alt="Garantia de 7 dias" />
            </div>

            <div>
                <h4>Aqui o Risco é Zero! Você tem Garantia</h4>
                <h6>Se em até 7 dias você não estiver satisfeito com o curso adquirido, sem problemas, nós iremos devolver 100% do valor investido!<br></br>É isso mesmo, ou você aprende ou tem o seu dinheiro de volta!</h6>
                <h4 style={{ margin: '4% 0', textAlign: 'center' }}><Link to="/registro" className="CTA CTAwhite CTAMobile">QUERO APROVEITAR ESSA OPORTUNIDADE!</Link></h4>
            </div>

        </div>
    );
}