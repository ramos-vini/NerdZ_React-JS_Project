import './listaCategoria.css';
import CourseCard from '../courseCard/CourseCard';
import Cursos from '../../global/cursos';
import { Grid } from "@mui/material";

export default function ListaCategoria(props) {

    let cursosCategoria = Cursos;

    if (props.max) {
        cursosCategoria = Cursos.filter((element, idx) => {
            return idx < parseInt(props.max);
        });
    }

    if (props.categoria) {
        cursosCategoria = cursosCategoria.filter((element) => {
            return (element.categorias).includes(props.categoria);
        });
    }

    let cursosCategoriaHTML = cursosCategoria.map((element, idx) => {

        let idxCursos;

        for (let i = 0; i < Cursos.length; i++){
            if (Cursos[i] === element){
                idxCursos = i;
            }
        }

        return <CourseCard img={element.img} nome={element.nome} descricao={element.descricao} key={idx} idx={idxCursos}></CourseCard>
    });

    return (
        <div className='listaCategoriaDiv'>
            <div className='listaCategoriaTitle'>
                {props.icon}
                <h2>{props.title}</h2>
            </div>
            <div>
                <Grid container spacing={8}>
                    {cursosCategoriaHTML}
                </Grid>
            </div>
        </div>
    );
}