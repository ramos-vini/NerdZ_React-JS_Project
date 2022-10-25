import './maisVendidos.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CourseCard from '../courseCard/CourseCard';
import Cursos from '../../global/cursos';

export default function MaisVendidos(props) {

    let cursosCategoria = Cursos;

    if(props.max){
        cursosCategoria = Cursos.filter((element, idx) => {
            return idx < parseInt(props.max);
        })
    }

    let cursosCategoriaHTML = cursosCategoria.map((element) => {

        return <CourseCard img={element.img} nome={element.nome} descricao={element.descricao}></CourseCard>
    });

    return (
        <div className='maisVendidosDiv'>
            <div className='maisVendidosTitle'>
                <StarRoundedIcon className='maisVendidosH2Icon' />
                <h2>Mais Vendidos</h2>
            </div>
            <div>
                {cursosCategoriaHTML}
            </div>
        </div>
    );
}