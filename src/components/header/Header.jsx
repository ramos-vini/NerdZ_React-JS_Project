import './header.css';
import { Link } from "react-router-dom";

export default function Header(params) {
    return (
        <>
            <nav className='headerNav'>
                <div className='headerNavDiv1'>
                    <h2 className='logo'><Link to="/">NerdZ</Link></h2>
                </div>

                <div className='headerNavDiv2'>
                    <Link to="/login">Entrar</Link>
                    <Link to="/registro">Cadastre-se Grátis</Link>
                </div>
            </nav>
        </>
    );
}