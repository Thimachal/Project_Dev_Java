import logo from '../../assets/img/logo.svg';
import './style.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src= {logo} alt="DSMeta" />
                <h1>Dev Java</h1>
                <p>
                    Código de aula DeSuperior feito por<a href="https://www.linkedin.com/in/thiago-oliveira-tmo/"> Thiago Oliveira</a>
                </p>
            </div>
        </header>
    )
}

export default Header;