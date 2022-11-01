import './videoBanner.css';
import Cursos from '../../global/cursos';

export default function VideoBanner(props) {

    let curso = Cursos[props.idx];

    return (

        <div className='bannerVideo' style={{ backgroundImage: `url(${curso.img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="video-responsive">
                <iframe className='iframe' width="560" height="315" src={curso.video} title="YouTube video player" modestbranding rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

