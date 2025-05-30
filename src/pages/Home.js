import { Link } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";

import "./Home.css";

const Home = () => {
    const url = 'http://localhost:3000/products';

    const {data: items, loading, error} = useFetch(url);
    console.log(items);
    return (
        <div>
            <h3>Home</h3>
            <h4>Produtos</h4>
            { loading && <p>Carregando dados...</p> }
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map(item => (
                    <li key={item.id}>
                        <h2>{item.nome}</h2>
                        <p>R$: {item.preco}</p>
                        {/* Rota dinâmica */}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    );    
};
export default Home;