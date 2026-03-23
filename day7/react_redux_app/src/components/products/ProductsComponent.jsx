import { useSelector } from "react-redux";
import ProductListComponent from "./ProductListComponent";

const ProductsComponent = () => {
    const products = useSelector(state => state.products.items);

    return (
        <>
            <ProductListComponent products={products} />
        </>
    );
};

export default ProductsComponent;