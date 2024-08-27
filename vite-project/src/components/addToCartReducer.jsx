export const addToCartReducer = (state, action) => {
    // console.log({state})
    if(state.itemRef)
    return {
        ...state,
        // addItems:[...state.addItems,action.payload],
        totalItems:(state.totalItems) +1
    };
};
