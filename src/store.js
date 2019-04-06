import { createStore, combineReducers } from 'redux'

import uiReducer from './ui/reducer'

const rootReducer = combineReducers({

})

const store = createStore(rootReducer)

export default store