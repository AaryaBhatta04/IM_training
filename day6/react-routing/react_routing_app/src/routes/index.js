import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// import AboutComponent from "../components/about/AboutComponent";
// import AdminComponent from "../components/admin/AdminComponent";
// import HomeComponent from "../components/home/HomeComponent";
// import LoginComponent from "../components/login/LoginComponent";
// import NoMatchComponent from "../components/no_match/NoMatchComponent";
// import ProductDetailsComponent from "../components/products/ProductDetailsComponent";
// import ProductNotSelectedComponent from "../components/products/ProductNotSelectedComponent";
// import ProductsComponent from "../components/products/ProductsComponent";
// import ProductsApiProvider from "../contexts/ProductsApiProvider";
// import ProductsProvider from "../contexts/ProductsProvider";
// import authenticatorApiClient from "../services/authenticator_api_client";

// Eager Loaded
import LoaderAnimation from "../components/common/LoaderAnimation";
import ProductsApiProvider from "../contexts/ProductsApiProvider";
import ProductsProvider from "../contexts/ProductsProvider";
import authenticatorApiClient from "../services/authenticator_api_client";

// Lazy Loaded
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
const AdminComponent = lazy(() => import("../components/admin/AdminComponent"));
const HomeComponent = lazy(() => import("../components/home/HomeComponent"));
const LoginComponent = lazy(() => import("../components/login/LoginComponent"));
const NoMatchComponent = lazy(() => import("../components/no_match/NoMatchComponent"));
const ProductDetailsComponent = lazy(() => import("../components/products/ProductDetailsComponent"));
const ProductNotSelectedComponent = lazy(() => import("../components/products/ProductNotSelectedComponent"));
const ProductsComponent = lazy(() => import("../components/products/ProductsComponent"));

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
    <Suspense fallback={<LoaderAnimation />}>
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
    </Suspense>
);