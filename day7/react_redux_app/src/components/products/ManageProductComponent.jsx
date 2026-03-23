import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { insertProduct, updateProduct } from "../../features/products/productsSlice";
import ToastNotification from "../common/ToastNotification";
import ProductFormComponent from "./ProductFormComponent";

const ManageProductComponent = () => {
    const { id } = useParams();
    const products = useSelector(state => state.products.items);
    const status = useSelector(state => state.products.status);
    const isLoading = status === 'loading';
    const [product, setProduct] = useState({ id: "", name: "", description: "", status: "" });
    const [toast, setToast] = useState({ show: false, message: '', type: 'info' });
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if (id && products.length > 0) {
            const productToEdit = products.find(p => p.id === id);
            if (productToEdit) {
                setProduct(productToEdit);
            }
        }
    }, [id, products]);

    const pageText = product.id ? "Edit Product" : "Add Product";

    const updateState = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const saveProduct = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                await dispatch(updateProduct(product)).unwrap();
                navigate('/products', { state: { toast: { message: 'Product updated successfully', type: 'success' } } })
            } else {
                await dispatch(insertProduct(product)).unwrap();
                navigate('/products', { state: { toast: { message: 'Product added successfully', type: 'success' } } });

            }
        } catch (error) {
            setToast({ show: true, message: `Failed to save product: ${error}`, type: 'danger' });
        }
    }

    return (
        <>
            <ProductFormComponent pageText={pageText} product={product} onChange={updateState} onSave={saveProduct} isLoading={isLoading} />
            <ToastNotification
                show={toast.show}
                onClose={() => setToast({ ...toast, show: false })}
                message={toast.message}
                type={toast.type}
            />
        </>
    );
};

export default ManageProductComponent;