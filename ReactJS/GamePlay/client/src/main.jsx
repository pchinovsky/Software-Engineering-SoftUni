import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CommentsProvider } from "./contexts/CommentsContext.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <CommentsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CommentsProvider>
);
