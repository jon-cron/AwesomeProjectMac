import React, { createContext } from 'react';

const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

const FavoritesContextProvider = ({children}) => {
    return <FavoriteContext.Provider>{children}</FavoriteContext.Provider>
}

export default FavoritesContextProvider