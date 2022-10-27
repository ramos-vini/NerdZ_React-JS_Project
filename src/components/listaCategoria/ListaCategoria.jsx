import './listaCategoria.css';
import CourseCard from '../courseCard/CourseCard';
import Cursos from '../../global/cursos';
import { Grid } from "@mui/material";

// TODO: Transformar MaisVendidos.jsx em ListaCategoria.jsx e chamar no Catalogo.jsx as Categorias de Dev, Videogames e Séries.

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

        return <CourseCard img={element.img} nome={element.nome} descricao={element.descricao} key={idx}></CourseCard>
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