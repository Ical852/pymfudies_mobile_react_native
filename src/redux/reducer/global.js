const initGlobalState = {
    isLoading: false,
    cart: [],
    fav: [],
    refresh: 1
}

export const globalReducer = (state = initGlobalState, action) => {
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading : action.value
        }
    }
    if (action.type === 'SET_CART') {
        return {
            ...state,
            cart : action.value
        }
    }
    if (action.type === 'SET_FAV') {
        return {
            ...state,
            fav : action.value
        }
    }
    if (action.type === 'SET_REFRESH') {
        return {
            ...state,
            refresh: action.value
        }
    }
    return state
}