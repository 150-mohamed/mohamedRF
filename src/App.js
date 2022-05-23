import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Blogsingle from './Component/Blogsingle/Blogsingle';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
function App() {

  return <>
    <Navbar />
    <div className='Container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blogsingle' element={<Blogsingle />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    <Footer/>
  </ >

}


export default App;
