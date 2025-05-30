import './App.css';

//1 - Config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import das pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

//import de components
import Navbar from './components/Navbar';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* Nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
