import Portfolio from './pages/portfolio/Portfolio.jsx'
import './App.css';
import Themes from  './components/Themes.jsx';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact.jsx';

function App() {
  

  return (
    <>
      <Navbar/>
      <Themes/>
      <Home/>
      <About/>
     <Portfolio/>
     <Contact/>
    </>
  )
}

export default App
