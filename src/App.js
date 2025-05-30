import './App.css';

//1 - Config react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import das pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

//import de components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* links com react router */}
        <Navbar />
        {/* search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Nested routes */}
          <Route path='/products/:id/info' element={<Info />} />
          {/* Rota dinâmica */}
          <Route path='/products/:id' element={<Product />} />
          {/* Search params*/}
          <Route path='/search' element={<Search />} />
          {/* no match route, NotFound - 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
