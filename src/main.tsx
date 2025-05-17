import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { SummerSchools } from "./pages/SummerSchools";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/summer-schools" element={<SummerSchools />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
