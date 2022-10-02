import axios from "axios"
import { setLoading } from "./global"
import { linkApi } from '../../utils'

export const setPage = (value) => (dispatch) => {
    dispatch({type: 'SET_PAGE', value})
}

export const getFood = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/food`)
        .then(res => {
            dispatch(setLoading(false))
            dispatch({type: 'SET_FOOD', value: res.data})
        })
        .catch(err => {
            dispatch(setLoading(false))
        })
}

export const getNotif = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/notification`)
        .then(res => {
            dispatch(setLoading(false))
            dispatch({type: 'SET_NOTIF', value: res.data})
        })
        .catch(err => {
            dispatch(setLoading(false))
            console.log(err)
        })
}

export const getTransactions = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/transaction/all`)
        .then(res => {
            dispatch(setLoading(false))
            dispatch({type: 'SET_TRANSACTIONS', value: res.data.data})
        })
        .catch(err => [
            dispatch(setLoading(false))
        ])
}