import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Eager Loading
import LoaderAnimation from "../components/common/LoaderAnimation";

// Lazy Loading
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
const HomeComponent = lazy(() => import("../components/home/HomeComponent"));
const NoMatchComponent = lazy(() => import("../components/no_match/NoMatchComponent"));

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="*" element={<NoMatchComponent />} />
        </Routes>
    </Suspense>
);