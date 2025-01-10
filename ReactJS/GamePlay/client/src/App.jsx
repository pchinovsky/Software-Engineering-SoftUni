import "./App.css";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/Register";

function App() {
    return (
        <>
            <div id="box">
                <Header></Header>

                <main id="main-content">
                    <Home></Home>
                    <Login></Login>
                    <Register></Register>
                </main>
            </div>
        </>
    );
}

export default App;
