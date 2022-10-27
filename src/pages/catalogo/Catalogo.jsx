import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainBanner from "../../components/mainBanner/MainBanner";
import ListaCategoria from "../../components/listaCategoria/ListaCategoria";
import Vantagens from "../../components/vantagens/Vantagens";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import './catalogo.css';

// TODO: Adc Categoria.jsx (3x): Videogames, Dev e Séries;
// TODO: Adc Component para produtores de conteúdo ao final da página;
// TODO: Adc JS para titulo 'Geek' do banner principal alternar com outras palavras em modelo de digitação.

export default function Catalogo(params) {
    return (
        <>
            <Header></Header>

            <MainBanner></MainBanner>

            <Vantagens></Vantagens>

            <ListaCategoria categoria="videogames" icon={<SportsEsportsOutlinedIcon className='listaCategoriaH2Icon'/>} title="Videogames"></ListaCategoria>
            <ListaCategoria categoria="series" icon={<MovieOutlinedIcon className='listaCategoriaH2Icon'/>} title="Séries & Filmes"></ListaCategoria>
            <ListaCategoria categoria="dev" icon={<CodeOutlinedIcon className='listaCategoriaH2Icon'/>} title="Desenvolvimento"></ListaCategoria>

            <Footer></Footer>
        </>
    );
}