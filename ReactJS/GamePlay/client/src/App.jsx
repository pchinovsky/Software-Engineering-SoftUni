import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/Register";
import Catalogue from "./components/catalogue/Catalogue";
import Create from "./components/create/Create";
import { Routes, Route } from "react-router-dom";
import Details from "./components/details/Details";
import Edit from "./components/edit/Edit";

function App() {
    return (
        <>
            <div id="box">
                <Header></Header>

                <main id="main-content">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/catalogue"
                            element={<Catalogue />}
                        />
                        <Route
                            path="/catalogue/create"
                            element={<Create />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/register"
                            element={<Register />}
                        />
                        <Route
                            path="/details/:gameId"
                            element={<Details />}
                        />
                        <Route
                            path="/edit/:gameId"
                            element={<Edit />}
                        />
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
