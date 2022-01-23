import players from "../../utils/players"
import { ADD_PLAYER, RETRIVE_PLAYER,UPDATE_PLAYER } from "./actionType"
import { orderPlayersByAvarage } from "../../utils/orderPlayersByVoteAvarage"


export const retrivePlayer = () => {
    return async dispatch => {
        dispatch({
            type: RETRIVE_PLAYER,
            payload: players.sort((a,b)=>b.tot_score - a.tot_score)
        })
    }
}

export const addPlayer = (value) => {
    return async dispatch => {
        dispatch({
            type: ADD_PLAYER,
            payload: orderPlayersByAvarage(value),
        })
    }
}

export const updatePlayer =  (value) => {
    return async dispatch => {
        dispatch({
            type:UPDATE_PLAYER,
            payload:orderPlayersByAvarage((value)),
        })
    }
}