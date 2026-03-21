import { createContext, useContext, useEffect, useState } from "react";
import productsAPIClient from "../services/products_api_client";

const ProductsApiContext = createContext();

export function useProducts() {
    const context = useContext(ProductsApiContext);

    if(!context) {
        throw new Error('useProducts must be used within the ProductsProvider')
    }

    return context;
}

const ProductsApiProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fecthProducts = async () => {
        try {
            setLoading(true);
            setError('');
            const data = await productsAPIClient.getAllProducts();
            setProducts(data);
        } catch (err) {
            console.log("Provider: ", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fecthProducts();
    }, []);

    const value = { products, loading, error, setProducts, fecthProducts };

    return (
        <ProductsApiContext.Provider value={value}>
            {children}
        </ProductsApiContext.Provider>
    );
}

export default ProductsApiProvider;