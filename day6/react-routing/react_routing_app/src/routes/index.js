import { Route, Routes } from "react-router-dom";
import AboutComponent from "../components/about/AboutComponent";
import HomeComponent from "../components/home/HomeComponent";

export default (
    <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
    </Routes>
);