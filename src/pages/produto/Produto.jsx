import './produto.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import VideoBanner from '../../components/videoBanner/VideoBanner';
import ValorProduto from '../../components/valorProduto/ValorProduto';
import Vantagens2 from '../../components/vantagens2/Vantagens2';

// TODO: div Feedback alunos (carrossel)
// TODO: Call to action nº2
// TODO: div FAQ 
// TODO: Garantia de 7 dias 
// TODO: Call to action nº3

export default function Produto(params) {

    return (
        <>
            <Header></Header>

            <VideoBanner></VideoBanner>

            <ValorProduto></ValorProduto>

            <Vantagens2></Vantagens2>

            <Footer></Footer>
        </>
    );
}