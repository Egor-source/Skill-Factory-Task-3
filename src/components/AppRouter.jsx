import React from 'react';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Board from "../pages/Board";
import Error404 from "../pages/Error404";
import TaskDetail from "../pages/TaskDetail";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Board/>}/>
                <Route path="/task/:status/:id" element={<TaskDetail/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;