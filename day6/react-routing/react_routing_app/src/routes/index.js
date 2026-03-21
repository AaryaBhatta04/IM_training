import { Route, Routes } from "react-router-dom";
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
            <ProductsApiProvider>
                <AdminComponent />
            </ProductsApiProvider>
        } />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<NoMatchComponent />} />
    </Routes>
);