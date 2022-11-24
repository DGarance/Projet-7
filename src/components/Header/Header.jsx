import {Link} from 'react-router-dom'
import Logo from '../../assets/logored.svg'

export default function Header (){
  return (
      <header>
        <img src={Logo} alt="Kasa logo"/>
        <nav> 
          <Link to="/"> Accueil </Link>
          <Link to="/about"> About</Link>  
      </nav>
      </header> 
 
  )
}