import './feedback.css';
import { Link } from "react-router-dom";

export default function Feedback(params) {
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

        <h4 style={{margin: '4% 0', textAlign: 'center'}}><Link to="/registro" className="CTA CTAMobile">QUERO FAZER PARTE DESSA FAMÍLIA!</Link></h4>
        </div>
    );
}