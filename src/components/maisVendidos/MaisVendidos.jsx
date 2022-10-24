import './maisVendidos.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CourseCard from '../courseCard/CourseCard';

export default function MaisVendidos(params) {
    return(
        <div className='maisVendidosDiv'>
            <div className='maisVendidosTitle'>
                <StarRoundedIcon className='maisVendidosH2Icon'/>
                <h2 className='maisVendidosH2'>Mais Vendidos</h2>
            </div>

            <div>
                <CourseCard img="https://cursos.dankicode.com/app/Views/public/images/uploads/cursos/599083332ff1a.png" title="Course Title" text="Here comes the course's description"></CourseCard>
            </div>
        </div>
    );
}