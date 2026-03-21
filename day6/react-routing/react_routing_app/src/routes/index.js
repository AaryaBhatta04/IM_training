import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AboutComponent from "../components/about/AboutComponent";
import AdminComponent from "../components/admin/AdminComponent";
import HomeComponent from "../components/home/HomeComponent";
import LoginComponent from "../components/login/LoginComponent";
import NoMatchComponent from "../components/no_match/NoMatchComponent";
import ProductDetailsComponent from "../components/products/ProductDetailsComponent";
import ProductNotSelectedComponent from "../components/products/ProductNotSelectedComponent";
import ProductsComponent from "../components/products/ProductsComponent";
import ProductsApiProvider from "../contexts/ProductsApiProvider";
import ProductsProvider from "../contexts/ProductsProvider";
import authenticatorApiClient from "../services/authenticator_api_client";

// Route Guard
const SecuredRoute = ({ children }) => {
    let location = useLocation();

    if (authenticatorApiClient.isAuthenticated) {
        return children;
    } else {
        return <Navigate to="/login" state={{ from: location }} />
    }
}

export default (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={
            <ProductsProvider>
                <ProductsComponent />
            </ProductsProvider>
        }>
            <Route path="" element={<ProductNotSelectedComponent />} />
            <Route path=":productId" element={<ProductDetailsComponent />} />
        </Route>
        <Route path="/admin" element={
            <SecuredRoute>
                <ProductsApiProvider>
                    <AdminComponent />
                </ProductsApiProvider>
            </SecuredRoute>
        } />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<NoMatchComponent />} />
    </Routes>
);