import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageAdd } from "../pages/page-add/page-user-add";
import { PageLogin } from "../pages/page-login/page-login";
import { PageUser } from "../pages/page-user/page-user";
import { DatailsUser } from "../pages/page-details/datails-user";

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLogin/>} />
                <Route path="/pageuser/*" element={<PageUser /> } />
                <Route path="/usercreate" element={<PageAdd />} />
                <Route path="/datailsuser/:id" element={<DatailsUser/>} />
            </Routes>
        </BrowserRouter>
    )
}