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

// // ---------------------------------------------------

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../../features/products/productsSlice";
// import ProductListComponent from "./ProductListComponent";

// const ProductsComponent = () => {
//     const products = useSelector(state => state.products.items);

//     const dispatch = useDispatch();

//     useEffect(()=>{
//         dispatch(fetchProducts());
//     }, []);

//     return (
//         <>
//             <ProductListComponent products={products} />
//         </>
//     );
// };

// export default ProductsComponent;

// --------------------------------------------------- Using Thunk

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteProduct, fetchProducts } from "../../features/products/productsSlice";
import { useReplaceHistoryState } from "../../hooks/useRelaceHistoryState";
import ConfirmModal from '../common/ConfirmModal';
import LoaderAnimation from "../common/LoaderAnimation";
import ToastNotification from '../common/ToastNotification';
import AddProductButton from "./AddProductButton";
import ProductListComponent from "./ProductListComponent";

const ProductsComponent = () => {
    const products = useSelector(state => state.products.items);
    const status = useSelector(state => state.products.status);
    const error = useSelector(state => state.products.error);
    const location = useLocation();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: 'info' });
    const [productToDelete, setproductToDelete] = useState(null);
    const [deleting, setDeleting] = useState(false);

    const replaceState = useReplaceHistoryState();

    // Handle toast
    useEffect(() => {
        if (location.state?.toast) {
            setToast({ ...location.state.toast, show: true });
            replaceState();
        }
    }, [location, replaceState]);

    useEffect(() => {
        if (status === 'idle')
            dispatch(fetchProducts());
    }, [status, dispatch]);

    const handleRefresh = async () => {
        try {
            await dispatch(fetchProducts()).unwrap();
            setToast({ show: true, message: 'Products refreshed successfully', type: 'success' });
        } catch (error) {
            setToast({ show: true, message: `Failed to refresh: ${error}`, type: 'danger' });
        }
    }

    const handleDeleteProduct = (product) => {
        setShow(true);
        setproductToDelete(product);
    }

    const handleYes = async () => {
        setShow(false);
        setDeleting(true);

        try {
            await dispatch(deleteProduct(productToDelete.id)).unwrap();
            setToast({ show: true, message: 'Product deleted successfully', type: 'success' });
        } catch (error) {
            setToast({ show: true, message: `Failed to delete product: ${error}`, type: 'danger' });
        } finally {
            setDeleting(false);
        }
    }

    if (error) {
        return (
            <div className="container mt-5">
                <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
                    <div>
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        <strong>Error:</strong> {error}
                    </div>
                    <button className="btn btn-danger btn-sm" onClick={handleRefresh}>
                        <i className="bi bi-arrow-clockwise me-1"></i>
                        Retry
                    </button>
                </div>
            </div>
        );
    } else if (status === 'loading' && !deleting) {
        return <LoaderAnimation />
    } else {
        return (
            <div>
                {deleting && (
                    <div style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1050,
                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Deleting...</span>
                        </div>
                    </div>
                )}
                <div className="mt-5 mb-3 d-flex gap-3">
                    <AddProductButton />
                    <button className='btn btn-warning btn-lg mx-2' onClick={handleRefresh}>
                        <span className='bi bi-arrow-clockwise'></span>
                        &nbsp;Refresh Products
                    </button>
                </div>
                <ProductListComponent products={products} onDelete={handleDeleteProduct} />
                <ToastNotification
                    show={toast.show}
                    onClose={() => setToast({ ...toast, show: false })}
                    message={toast.message}
                    type={toast.type}
                />
                <ConfirmModal show={show} title={"Confirm Delete Product"}
                    message={`Are you sure, you want to delete this product?`}
                    handleYes={handleYes}
                    handleNo={() => {
                        setShow(false);
                    }} />
            </div>
        );
    }
};

export default ProductsComponent;