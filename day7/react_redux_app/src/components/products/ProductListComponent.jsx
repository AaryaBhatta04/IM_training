import { Link } from 'react-router-dom';

const ProductListRow = ({ product, onDelete }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.status}</td>
            <td>
                <Link className='text-info' to={`/product/${product.id}`}>Edit</Link>
            </td>
            <td>
                <Link className='text-danger' to={`/product/${product.id}`} onClick={
                    (e) => {
                        e.preventDefault();
                        onDelete(product);
                    }
                }>Delete</Link>
            </td>
        </tr>
    );
}

const ProductListComponent = ({ products, onDelete }) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => <ProductListRow key={product.id} product={product} onDelete={onDelete} />)
                }
            </tbody>
        </table>
    );
};

export default ProductListComponent;