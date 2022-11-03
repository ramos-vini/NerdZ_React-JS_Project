import "./mainBanner.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MainBanner(params) {

    const Categorias = ['Games', 'Séries', 'Filmes', 'Desenvolvimento', 'Tecnologia'];

    let [titulo, setTitulo] = useState(Categorias[0].substring(0, 1));

    let palavra = 0;
    let letra = 1;

    useEffect(() => {
        const interval = setInterval(() => {
          setTitulo(Categorias[palavra].substring(0, letra++));

          if(letra > (Categorias[palavra]).length){
            console.log('entrou agora');
            letra = 1;
            palavra++;
          }

          if(palavra >= Categorias.length){
            palavra = 0;
          }

        }, 275);

        return () => clearInterval(interval);
      }, []);

    
    return (
        <>
            <div className="mainBannerBg">
                <div className="mainBannerFilter">
                    <div className="mainBannerContent">
                        <h4>Eleve seus conhecimentos sobre</h4>
                        <h1>{titulo}<span style={{fontWeight: 'lighter', opacity: '10%'}}>|</span></h1>
                        <h4>para o próximo nível</h4>
                        <h5 style={{marginTop: '4%'}}><Link to="/registro" className="mainBannerLink" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'initial'});}}>MATRICULE-SE GRÁTIS</Link></h5>
                    </div>
                </div>
            </div>
        </>
    );
}