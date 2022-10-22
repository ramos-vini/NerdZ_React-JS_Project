import './header.css';

export default function Header(params) {
    return (
        <>
            <nav className='headerNav'>
                <div className='headerNavDiv1'>
                    <h2 className='logo'><a href>NerdZ</a></h2>
                </div>

                <div className='headerNavDiv2'>
                    <a href>Entrar</a>
                    <a href>Cadastre-se Grátis</a>
                </div>
            </nav>
        </>
    );
}