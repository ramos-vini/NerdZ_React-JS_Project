import "./mainBanner.css";
import { Link } from "react-router-dom";

export default function MainBanner(params) {
    return (
        <>
            <div className="mainBannerBg">
                <div className="mainBannerFilter">
                    <div className="mainBannerContent">
                        <h4>Eleve seus conhecimentos</h4>
                        <h1>Geek</h1>
                        <h4>para o próximo nível</h4>
                        <h5 style={{marginTop: '4%'}}><Link to="/registro" className="mainBannerLink">MATRICULE-SE GRÁTIS</Link></h5>
                    </div>
                </div>
            </div>
        </>
    );
}