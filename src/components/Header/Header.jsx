import { Link } from 'react-router-dom';
import Logo from '../../assets/logored.svg';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Kasa logo" className="header__img" />
            </div>
            <nav className="header__nav">
                <Link to="/"> Accueil </Link>
                <Link to="/about"> About</Link>
            </nav>
        </header>
    );
}
