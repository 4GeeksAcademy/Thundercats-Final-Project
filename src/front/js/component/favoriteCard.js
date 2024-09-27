import React, { useEffect, useState } from "react";
import "../../styles/card.css";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Card = (props) => {
  const { store, actions } = useContext(Context)
  const { title, description, imgurl, genre, id, game_id } = props
  const navigate = useNavigate()
  const [addFavorite, setAddFavorite] = useState(false)
  const favoriteGame = store.user?.favorite_game?.find((item) => item.game_id === game_id);


  useEffect(() => {
    setAddFavorite(addFavorite);
  }, [store.favorites]);
  //? is a NULL operator and checks to see if something exists or not
  const setFavorite = () => {
    if (favoriteGame) {
      setAddFavorite(false)
      actions.deleteFavorites(favoriteGame.id);
    } else {
      //actions.addFavorites(props.title);
      setAddFavorite(!addFavorite)
      actions.addFavorites(game_id, store.user) //was originally the onclick in button
    }
  }

  return (
    <div className="card bg-dark text-white" style={{ width: "15rem" }}>
      {/* onClick={() => { navigate(`/game/${id}`) }} */}
      <Link to={`/game/${game_id}`}>
        <img
          src={imgurl}
          className="card-img-top"
          alt="..."
        />
      </Link>
      <div className="card-body">
        <Link to={`/game/${game_id}`}>
          <h5 className="card-title">
            {title}
          </h5>
        </Link>
        <p className="game-genre">
          {genre}
        </p>
        <p className="card-text">
          {description}
        </p>
        {/* Render trash can if user already has it favorited */}

        <button
          onClick={setFavorite}>
          {addFavorite ? "Remove from Favorites" : "Remove from Favorites"}
        </button>
      </div>
    </div>
  );
};

