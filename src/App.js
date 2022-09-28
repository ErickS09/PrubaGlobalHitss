import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';

//Configuración de react-router para la pantalla principal "Home" y la pantalla del detalle del producto

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:id' element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
