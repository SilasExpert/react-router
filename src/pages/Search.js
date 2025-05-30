import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";

const Search = () => {
    let [searchParams] = useSearchParams();

    const url = "http://localhost:3000/products?" + searchParams;
   
    const { data: items, loadind, error } = useFetch(url);

    return (
        <div>
            <h1>Resultados disponíveis!</h1>
            <ul className="products">
                {items &&
                    items.map((item) => (
                        <li key={item.id}>
                            <h2>{item.nome}</h2>
                            <p>{item.preco}</p>
                            <Link to={`/products/${item.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default Search;