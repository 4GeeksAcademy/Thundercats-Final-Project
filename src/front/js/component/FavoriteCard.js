import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const FavoriteCard = ({ game }) => {
    const { actions } = useContext(Context);

    const handleRemove = () => {
        actions.removeFavoriteGame(game.id);
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{game.title}</h5>
                <p className="card-text">Genre: {game.genre}</p>
                <p className="card-text">Rating: {game.rating}</p>
                <button onClick={handleRemove} className="btn btn-danger">
                    Remove from Favorites
                </button>
            </div>
        </div>
    );
};
