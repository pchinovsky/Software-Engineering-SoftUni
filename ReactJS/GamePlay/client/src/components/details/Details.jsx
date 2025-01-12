import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/catalogue-api";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Comment from "../comments/Comment";
import CommentCreate from "../comments/CommentCreate";
import { CommentsContext } from "../../contexts/CommentsContext";

export default function Details() {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [gameComments, setGameComments] = useState([]);
    // const [comments, setComments] = useState([]);
    const { comments, getCommentsByGameId } =
        useContext(CommentsContext);
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            // const comments = await api.getComments(gameId);
            const filteredComments = comments.filter(
                (comment) => comment.gameId === gameId
            );
            const game = await api.getGameById(gameId);
            setGame(game);
            setGameComments(filteredComments);
            // setComments(comments);
            // getCommentsByGameId(gameId);
        })();
    }, [gameId, comments]);

    console.log("comments - ", comments);

    async function handleDel() {
        await api.delGame(gameId);
        navigate("/");
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img
                        className="game-img"
                        src={game.imageUrl}
                    />
                    <h1>{game.title}</h1>
                    <span className="levels">
                        MaxLevel: {game.maxLevel}
                    </span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    {gameComments.length > 0 ? (
                        <ul>
                            {gameComments.map((comment) => (
                                <Comment
                                    key={comment._id}
                                    comment={
                                        comment.comment
                                    }
                                />
                            ))}
                        </ul>
                    ) : (
                        <p className="no-comment">
                            No comments yet.
                        </p>
                    )}
                </div>
                <div className="buttons">
                    <Link
                        to={`/edit/${game._id}`}
                        className="button"
                    >
                        Edit
                    </Link>
                    <a
                        onClick={handleDel}
                        href="#"
                        className="button"
                    >
                        Delete
                    </a>
                </div>
            </div>
            <CommentCreate gameId={game._id} />
        </section>
    );
}
