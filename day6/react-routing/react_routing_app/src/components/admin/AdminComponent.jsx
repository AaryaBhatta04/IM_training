import { useEffect, useState } from 'react';
import productsAPIClient from '../../services/products_api_client';
import DataTable from '../common/DataTable';

const AdminComponent = () => {
    const [cState, setCState] = useState({ products: [], message: "Loading data, please wait..." });

    useEffect(() => {
        productsAPIClient.getAllProducts().then((data) => {
            setCState({ products: data, message: "" });
        }).catch((eMsg) => {
            setCState({ products: [], message: eMsg });
        })
    }, []);

    return (
        <div className='text-center'>
            <h1 className="text-primary">Admin Component</h1>
            <hr />
            <h3 className="text-danger">{cState.message}</h3>
            <DataTable items={cState.products}>
                <h4 className="text-primary text-uppercase font-weight-bold">Products Table</h4>
            </DataTable>
        </div>
    );
};

export default AdminComponent;