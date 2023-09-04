// import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Error404 from './Components/Error404';
import Contact from './Components/Contact';
import Order from './Components/Order';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='Order-Summary' element={<Order />}/>

        <Route path='/*' element={<Error404/>}/>
        
      </Routes>
    </>
  );
}

export default App;
