import React from 'react';
import {Route, Routes,} from "react-router-dom";
import Board from "../pages/Board";
import Error404 from "../pages/Error404";
import TaskDetail from "../pages/TaskDetail";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Board/>}/>
            <Route path="/task/:status/:id" element={<TaskDetail/>}/>
            <Route path="*" element={<Error404/>}/>
        </Routes>
    );
};

export default AppRouter;