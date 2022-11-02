import './garantia.css';
import { Link } from "react-router-dom";
import Cursos from '../../global/cursos';

export default function Garantia(props) {
    return (
        <div className='divGarantia'>
            <div>
                <img src={require('../../assets/img/garantia.png')} style={{ width: '200px' }} alt="Garantia de 7 dias" />
            </div>

            <div>
                <h4>Aqui o Risco é Zero! Você tem Garantia</h4>
                <h6>Se em até 7 dias você não estiver satisfeito com o curso adquirido, sem problemas, nós iremos devolver 100% do valor investido!<br></br>É isso mesmo, ou você aprende ou tem o seu dinheiro de volta!</h6>
                <h4 style={{ margin: '4% 0', textAlign: 'center' }}><Link to={`/checkout/${((Cursos[props.idx]).nome).replace(/ /g, "-").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="CTA CTAwhite CTAMobile" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'initial'});}}>QUERO APROVEITAR ESSA OPORTUNIDADE!</Link></h4>
            </div>

        </div>
    );
}