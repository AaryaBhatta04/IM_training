import { createContext, useContext, useState } from "react";

const productsData = [
    {
        id: 1,
        name: "Item One",
        description:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        status: "Available"
    },
    {
        id: 2,
        name: "Item Two",
        description: "sunt aut facere ptio reprehenderit",
        status: "Not Available"
    },
    {
        id: 3,
        name: "Item Three",
        description: "provident occaecati excepturi optio reprehenderit",
        status: "Available"
    },
    {
        id: 4,
        name: "Item Four",
        description: "reprehenderit",
        status: "Not Available"
    }
];

const ProductsContext = createContext();

export function useProducts() {
    const context = useContext(ProductsContext);

    if(!context) {
        throw new Error('useProducts must be used within the ProductsProvider')
    }

    return context;
}

const ProductsProvider = ({children})=>{
    const [products] = useState(productsData);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;