import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageLogin } from "../pages/page-login/page-login";
import { PageUser } from "../pages/page-user/page-user";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin/>} />
                <Route path="/pageuser" element={<PageUser /> } />
            </Routes>
        </BrowserRouter>
    )
}