import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useForm(
    initialValues,
    fetchFn,
    route
) {
    const [formValues, setFormValues] =
        useState(initialValues);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const resetForm = () => setFormValues(initialValues);

    const handleSubmit = async (e) => {
        console.log("useForm - form values", formValues);

        e.preventDefault();
        try {
            await fetchFn(formValues);
            navigate(route);
        } catch (err) {
            setError(err);
        }
    };

    return {
        formValues,
        handleInputChange,
        handleSubmit,
        resetForm,
        error,
    };
}
