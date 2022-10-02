const initHome = {
    food: [],
    main: 1,
    notif: [],
    trans: []
}

export const homeReducer = (state = initHome, action) => {
    if (action.type === 'SET_FOOD') {
        return {
            ...state,
            food : action.value
        }
    }
    if (action.type === 'SET_NOTIF') {
        return {
            ...state,
            notif: action.value
        }
    }
    if (action.type === 'SET_TRANSACTIONS') {
        return {
            ...state,
            trans: action.value
        }
    }
    if (action.type === 'SET_PAGE') {
        return {
            ...state,
            main: action.value
        }
    }
    return state
}