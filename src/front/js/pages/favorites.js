import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
// import { FavoriteCard } from "../component/favoriteCard";
import "../../styles/home.css";
import { DisplayOrRedirect } from "../component/conditional_renderers";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      await actions.getUser();
      setIsLoading(false);
    };
    getUser();
  }, []);

  return (
    <>
      <DisplayOrRedirect target="/login">
        <div className="container-fluid d-flex flex-wrap justify-content-center gap-3">
          {store.games.filter(
            // This is kinda gory, ngl.
            game => store.user?.favorite_game?.map(fav => fav.game_id).includes(game.id)
          ).map((game, index) => (
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
      </DisplayOrRedirect>
    </>
  );
};
// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext";
// import { FavoriteCard } from "../component/favoriteCard";
// import "../../styles/home.css";
// import { DisplayOrRedirect } from "../component/conditional_renderers";

// export const Favorites = () => {
//   const { store, actions } = useContext(Context);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getUser = async () => {
//       setIsLoading(true);
//       await actions.getUser();
//       setIsLoading(false);
//     };
//     getUser();
//   }, []);

//   return (
//     <>
//       <DisplayOrRedirect target="/login">
//         <div className="container-fluid d-flex flex-wrap justify-content-center gap-3">
//           {/* Safe defaults for store.games and store.user?.favorite_game */}
//           {store.games?.filter(
//             game => store.user?.favorite_game?.map(fav => fav.game_id).includes(game.id) || []
//           ).map((game, index) => (
//             <FavoriteCard
//               game_id={game.id}
//               key={index}
//               title={game.name}
//               description={game.short_description}
//               genre={game.genre}
//               imgurl={game.thumbnail}
//               id={index}
//             />
//           ))}
//         </div>
//       </DisplayOrRedirect>
//     </>
//   );
// };
