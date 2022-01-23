import {
    RETRIVE_PLAYER,
    ADD_PLAYER,
    UPDATE_PLAYER,
} from './actionType';

import players from "../../utils/players"

const initialState = {
    player: players.sort((a,b)=>b.tot_score - a.tot_score),
}


const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PLAYER:    
            return {
                ...state,
                player:JSON.parse(JSON.stringify(action.payload))
            }
        default: return state
            case ADD_PLAYER:    
            return {
                ...state,
                player:JSON.parse(JSON.stringify(action.payload))
            }
            case RETRIVE_PLAYER:
                return {
                    ...state,
                    player:action.payload,
                }
        
        
        }
}


export default reducer;