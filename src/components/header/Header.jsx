import './header.css';

export default function Header(params) {
    return (
        <>
            <nav>
                <div className='navDiv1'>
                    <h2><a href>Logo</a></h2>
                </div>

                <div className='navDiv2'>
                    <a href>Entrar</a>
                    <a href>Cadastre-se Grátis</a>
                </div>
            </nav>
        </>
    );
}