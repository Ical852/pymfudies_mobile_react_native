export const setLoading = (value) => (dispatch) => {
    dispatch({type: 'SET_LOADING', value})
}

export const setFav = (value) => (dispatch) => {
    dispatch({type: 'SET_FAV', value})
}


export const setCart = (value) => (dispatch) => {
    dispatch({type: 'SET_CART', value})
}