import React, {useState} from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import AppRouter from "./components/AppRouter";
import BoardContext from "./context";
import {useLocalStorage} from "./hooks/useLocalStorage";
import getBoardData from "./mock/getBoardData";
import {BrowserRouter} from "react-router-dom";

function App() {
    let [board, setBoard] = useLocalStorage('board', getBoardData());
    return (
        <BrowserRouter>
            <BoardContext.Provider value={{board, setBoard}}>
                <div className="wrapper">
                    <Header/>
                    <main className="main">
                        <AppRouter/>
                    </main>
                </div>
                <Footer/>
            </BoardContext.Provider>
        </BrowserRouter>
    );
}

export default App;
