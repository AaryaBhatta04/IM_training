// import { useSelector } from "react-redux";
// import ProductListComponent from "./ProductListComponent";

// const ProductsComponent = () => {
//     const products = useSelector(state => state.products.items);

//     return (
//         <>
//             <ProductListComponent products={products} />
//         </>
//     );
// };

// export default ProductsComponent;

// ---------------------------------------------------

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import ProductListComponent from "./ProductListComponent";

const ProductsComponent = () => {
    const products = useSelector(state => state.products.items);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchProducts());
    }, []);

    return (
        <>
            <ProductListComponent products={products} />
        </>
    );
};

export default ProductsComponent;