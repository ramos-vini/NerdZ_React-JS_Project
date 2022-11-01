import './produto.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import VideoBanner from '../../components/videoBanner/VideoBanner';
import ValorProduto from '../../components/valorProduto/ValorProduto';
import Vantagens2 from '../../components/vantagens2/Vantagens2';
import Feedback from '../../components/feedback/Feedback';
import Faq from '../../components/faq/Faq';
import Garantia from '../../components/garantia/Garantia';

export default function Produto(props) {

    return (
        <>
            <Header></Header>

            <VideoBanner idx={props.idx}></VideoBanner>

            <ValorProduto idx={props.idx}></ValorProduto>

            <Vantagens2></Vantagens2>

            <Feedback></Feedback>

            <Faq></Faq>

            <Garantia></Garantia>

            <Footer></Footer>
        </>
    );
}