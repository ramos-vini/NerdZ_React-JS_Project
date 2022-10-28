import './header.css';
import { Link } from "react-router-dom";
import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Header(params) {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <>
            <nav className='headerNav'>
                <div className='headerNavDiv1'>
                    <h2 className='logo'><Link to="/">NerdZ</Link></h2>
                </div>

                <div className='headerNavDiv2'>
                    <Link to="/login">Entrar</Link>
                    <Link to="/registro">Cadastre-se{matches ? ' Grátis' : ''}</Link>
                </div>
            </nav>
        </>
    );
}