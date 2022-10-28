import './produto.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import React from "react";
import Cursos from '../../global/cursos';
// import { useState } from 'react';

export default function Produto(params) {

    // const [curso, setCurso] = useState(cursoControl);

    let curso = Cursos[0];

    return (
        <>
            <Header></Header>

            <>

                <div className='bannerVideo' style={{ backgroundImage: `url(${curso.img})` }}>
                    <div className="video-responsive">
                        <iframe className='iframe' width="560" height="315" src={curso.video} title="YouTube video player" modestbranding rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                {/* TODO: div com Titulo, Descrição e Valor de X por apenas 12x de Y - Promo por Tempo Limitado */}
                {/* TODO: Call to action nº1*/}
                {/* TODO: div Vantagens(2) com descrição - Acesso Vitalício, Suporte Premium, Certificado Profissional, Garantia de 7 dias */}
                {/* TODO: div Feedback alunos (carrossel)*/}
                {/* TODO: Call to action nº2*/}
                {/* TODO: div FAQ */}
                {/* TODO: Garantia de 7 dias */}
                {/* TODO: Call to action nº3*/}
            </>

            <Footer></Footer>
        </>
    );
}