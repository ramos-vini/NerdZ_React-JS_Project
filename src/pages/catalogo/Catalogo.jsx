import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainBanner from "../../components/mainBanner/MainBanner";
import MaisVendidos from "../../components/maisVendidos/MaisVendidos";
import './catalogo.css';

// TODO: Adc Categoria.jsx (3x): Videogames, Dev e Séries;
// TODO: Adc Component para produtores de conteúdo ao final da página;
// TODO: Adc JS para titulo 'Geek' do banner principal alternar com outras palavras em modelo de digitação.

export default function Catalogo(params) {
    return (
        <>
            <Header></Header>

            <MainBanner></MainBanner>

            <MaisVendidos categoria="maisVendidos"></MaisVendidos>

            <Footer></Footer>
        </>
    );
}