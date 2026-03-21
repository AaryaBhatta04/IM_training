import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsProvider";

const ProductDetailsComponent = () => {
    const { productId } = useParams();
    const { products } = useProducts();

    let product = products.find(product => product.id === parseInt(productId));

    let productView = <h2 className="text-warning">Product Not Found</h2>;
    
    if (product) {
        productView = (
            <>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4 className={product.status === 'Available' ? 'text-success' : 'text-danger'}>{product.status}</h4>
            </>
        );
    }

    return (
        <>
            <h2 className="text-warning">Product Details for {productId}</h2>
            {productView}
        </>
    );
};

export default ProductDetailsComponent;