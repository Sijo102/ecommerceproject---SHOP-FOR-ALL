import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Product';
import ProductDetail from './components/ProductDetail';
import Register from './components/buttons/Register';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/buttons/Login';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path = "/" element={<Home/>}/>
        <Route exact path='/Product' element={<Products/>}/>
        <Route exact path='/Product/:id' element={<ProductDetail/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Cart' element={<Cart/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
