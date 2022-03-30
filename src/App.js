import React from "react";
import { Routes, Route, } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Dashboard from "./routes/Dashboard";
import "./components/fontawesome";

const App = () => {
    return ( 
    <div >
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    </div>
    );
};

export default App;