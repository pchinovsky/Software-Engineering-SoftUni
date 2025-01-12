import { useState, useContext } from "react";
import api from "../../api/catalogue-api";
import { useNavigate } from "react-router-dom";
import { CommentsContext } from "../../contexts/CommentsContext";

export default function CommentCreate({ gameId }) {
    const [comment, setComment] = useState("");
    const { comments, setComments } =
        useContext(CommentsContext);
    const navigate = useNavigate();

    function handleInputChange(e) {
        const { name, value } = e.target;
        setComment(value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("submit on!");

        const newComment = await api.createComment(
            gameId,
            comment
        );
        setComments((prevComments) => [
            ...prevComments,
            newComment,
        ]);
        setComment("");
        navigate(`/details/${gameId}`);
    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form onSubmit={handleSubmit} className="form">
                <textarea
                    name="comment"
                    placeholder="Comment......"
                    value={comment}
                    onChange={handleInputChange}
                />
                <input
                    className="btn submit"
                    type="submit"
                    defaultValue="Add Comment"
                />
            </form>
        </article>
    );
}
