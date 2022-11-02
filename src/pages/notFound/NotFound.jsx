import './notfound.css';
import { ReactComponent as NotFoundSVG } from '../../assets/img/404.svg';
import { Link } from "react-router-dom";

export default function NotFound(params) {
    return(
        <div className='divNotFound'>
            <NotFoundSVG className='notFoundSVG'></NotFoundSVG>
            <h1>Ops... Página não encontrada.</h1>
            <h5 style={{marginTop: '4%'}}><Link to="/" className="mainBannerLink" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'initial'});}}>Página Inicial</Link></h5>
        </div>
    )
}