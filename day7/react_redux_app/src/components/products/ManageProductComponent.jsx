import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductFormComponent from "./ProductFormComponent";

const ManageProductComponent = () => {
    const { id } = useParams();
    const products = useSelector(state => state.products.items);
    const [product, setProduct] = useState({ id: "", name: "", description: "", status: "" });

    useEffect(() => {
        if (id && products.length > 0) {
            const productToEdit = products.find(p => p.id === id);
            if (productToEdit) {
                setProduct(productToEdit);
            }
        }
    }, [id, products]);

    const pageText = product.id ? "Edit Product" : "Add Product";

    return (
        <>
            <ProductFormComponent pageText={pageText} product={product} onChange={() => { }} onSave={() => { }} />
        </>
    );
};

export default ManageProductComponent;