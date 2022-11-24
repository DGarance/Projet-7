import {Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Locations from './pages/Locations/Locations'
import Error from './pages/Error/Error'

export default function App(){
  return(
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/locations/:id" element={<Locations />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
      </div>
    
  );
}
