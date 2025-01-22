import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useLogout } from "../../hooks/useAuth";

export default function Header() {
    const { isAuth } = useContext(AuthContext);
    // console.log("isAuth in nav - ", isAuth);
    const logout = useLogout();

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/catalogue">All games</Link>
                {isAuth ? (
                    <div id="user">
                        <Link to="/catalogue/create">
                            Create Game
                        </Link>
                        <button onClick={logout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
