import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CommentsProvider } from "./contexts/CommentsContext.jsx";

import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <CommentsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CommentsProvider>
    </AuthProvider>
);
