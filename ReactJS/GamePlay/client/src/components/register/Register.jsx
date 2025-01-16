import useForm from "../../hooks/useForm";
import useAuth from "../../hooks/useAuth";
import authApi from "../../api/auth-api";

export default function Register() {
    const initialValues = {
        email: "",
        password: "",
        rePassword: "",
    };
    const reg = useAuth.useRegister();
    const route = "/catalogue";
    const { formValues, handleInputChange, handleSubmit } =
        useForm(initialValues, reg, route);

    return (
        <section
            id="register-page"
            className="content auth"
        >
            <form onSubmit={handleSubmit} id="register">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={formValues.email}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="con-pass">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        name="rePassword"
                        id="rePassword"
                        value={formValues.rePassword}
                        onChange={handleInputChange}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Register"
                    />
                    <p className="field">
                        <span>
                            If you already have profile
                            click
                            <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
