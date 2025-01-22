import useForm from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

export default function Login() {
    const initialValues = {
        email: "",
        password: "",
    };
    const log = useLogin();
    const route = "/catalogue";
    const { formValues, handleInputChange, handleSubmit } =
        useForm(initialValues, log, route);

    return (
        <section id="login-page" className="auth">
            <form onSubmit={handleSubmit} id="login">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="login-pass">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                    <input
                        type="submit"
                        className="btn submit"
                        defaultValue="Login"
                    />
                    <p className="field">
                        <span>
                            If you don't have profile click
                            <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
