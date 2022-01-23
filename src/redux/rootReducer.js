import { combineReducers } from 'redux'
import playerReducer from './player/reducer'

const rootReducer = combineReducers({
    playerReducer:playerReducer,
})

export default rootReducer;