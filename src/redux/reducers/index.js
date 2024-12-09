const initialState = {
    job: {
        content: [],
    },
    favorites: {
        agencies: [],
    },
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: {
                    ...state.favorites,
                    agencies: [...state.favorites.agencies, action.payload],
                },
            };
        default:
            return state;
    }
};

export default mainReducer;
