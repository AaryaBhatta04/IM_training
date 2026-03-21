import { Route, Routes } from "react-router-dom";
import AboutComponent from "../components/about/AboutComponent";
import AdminComponent from "../components/admin/AdminComponent";
import HomeComponent from "../components/home/HomeComponent";
import LoginComponent from "../components/login/LoginComponent";
import NoMatchComponent from "../components/no_match/NoMatchComponent";
import ProductsComponent from "../components/products/ProductsComponent";

export default (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="*" element={<NoMatchComponent />} />
    </Routes>
);