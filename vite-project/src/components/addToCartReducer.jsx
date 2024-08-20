export const addToCartReducer = (state, action) => {
    // console.log({state})
    return {
        ...state,
        addItems:[...state.addItems,action.payload],
        totalItems:(state.totalItems) + Number(action.modifier)
    };
};
