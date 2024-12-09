import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites.agencies);

    return (
        <div>
            <h2>Your Favorite Agencies</h2>
            {favorites.length > 0 ? (
                favorites.map((agency, index) => (
                    <div key={index}>
                        <h3>{agency.name}</h3>
                    </div>
                ))
            ) : (
                <p>No favorites.</p>
            )}
        </div>
    );
};

export default Favorites;
