import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";

const Product = () => {
    //Rota dinâmica
    const { id } = useParams();

    //carregamento de dado individual
    const url = "http://localhost:3000/products/" + id;

    const {data: product, loading, error} = useFetch(url);

    return (
        <>
            <p>ID do produto: {id}</p>
            {error && <p>Ocorreu um erro!</p>}
            {loading && <p>Carregando dados...</p>}
            {product && (
                <div>
                    <h1>{product.nome}</h1>
                    <p>R$ {product.preco}</p>
                </div>
            )}
        </>
    );
};
export default Product; 