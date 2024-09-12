import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { FavoriteCard } from "../component/FavoriteCard";

export const ProfilePage = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Fetch user profile when the component mounts
        actions.getUserProfile();
    }, [actions]);

    return (
        <div className="container">
            <h1>{store.user?.name}'s Profile</h1>
            <p>Email: {store.user?.email}</p>

            <h3>Favorite Games:</h3>
            <div className="favorite-cards">
                {store.user?.favoriteGames?.length > 0 ? (
                    store.user.favoriteGames.map((game) => (
                        <FavoriteCard key={game.id} game={game} />
                    ))
                ) : (
                    <p>No favorite games yet.</p>
                )}
            </div>
        </div>
    );
};

 
