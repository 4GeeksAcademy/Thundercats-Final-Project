import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   // 
  //   const fetchGames = async () => {
  //     setIsLoading(true);
  //     await actions.fetchGames();
  //     setIsLoading(false);
  //   };
  //   fetchGames();
  // }, []);

  useEffect(() => {
    // 
    const getUser = async () => {
      await actions.getUser();
    };
    getUser();
  }, []);

  return (
    <>
      {isLoading ? (
        <><div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div></>
      ) : (
        <div>
          <div className="text-center mt-2" id="home">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButtonDark"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              {[
                "mmorpg", "shooter", "strategy", "moba", "racing", "sports",
                "social", "sandbox", "open-world", "survival", "pvp", "pve",
                "pixel", "voxel", "zombie", "turn-based", "first-person",
                "third-person", "top-down", "tank", "space", "sailing",
                "side-scroller", "superhero", "permadeath", "card",
                "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d",
                "anime", "fantasy", "sci-fi", "fighting", "action-rpg",
                "action", "military", "martial-arts", "flight", "low-spec",
                "tower-defense", "horror", "mmorts"
              ].map((category) => (
                <li key={category}>
                  <a
                    className="dropdown-item"
                    onClick={() => actions.filterGames(category)}
                    href="#"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </a>
                </li>
              ))}
            </ul>

            <h1 id="heading">Game Library</h1>
            <div className="container-fluid d-flex flex-wrap justify-content-center gap-3">
              {store.games.map((game, index) => (
                <Card
                  game_id={game.id}
                  key={index}
                  title={game.name}
                  description={game.short_description}
                  genre={game.genre}
                  imgurl={game.thumbnail}
                  id={index}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
};