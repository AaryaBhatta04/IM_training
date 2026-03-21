import { Link, Outlet } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsProvider";
import './ProductsComponent.css';

const ProductsComponent = () => {
    const { products } = useProducts();

    return (
        <div className='text-center'>
            <h1 className="text-primary">Products Component</h1>
            <div className="row mt-5">
                <div className="col">
                    <div className="graybox">
                        <ul className="list-group">
                            {
                                products.map((product) => (
                                    <li key={product.id} className="list-group-item">
                                        <Link to={`${product.id}`}>{product.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ProductsComponent;