import './feedback.css';
import { Link } from "react-router-dom";
import Cursos from '../../global/cursos';

export default function Feedback(props) {
    return (
        <div className='divFeedback'>
        <div id="carouselExampleControls" class="carousel slide carousel-dark" data-bs-ride="carousel" data-bs-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require('../../assets/img/feedback1.png')} class="d-block imgFeedback" alt="Feedback do Cliente 1"></img>
                </div>
                <div class="carousel-item">
                    <img src={require('../../assets/img/feedback2.png')} class="d-block imgFeedback" alt="Feedback do Cliente 2"></img>
                </div>
                <div class="carousel-item">
                    <img src={require('../../assets/img/feedback3.png')} class="d-block imgFeedback" alt="Feedback do Cliente 3"></img>
                </div>
                <div class="carousel-item">
                    <img src={require('../../assets/img/feedback4.png')} class="d-block imgFeedback" alt="Feedback do Cliente 4"></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <h4 style={{margin: '4% 0', textAlign: 'center'}}><Link to={`/checkout/${((Cursos[props.idx]).nome).replace(/ /g, "-").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="CTA CTAMobile" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'initial'});}}>QUERO FAZER PARTE DESSA FAMÍLIA!</Link></h4>
        </div>
    );
}