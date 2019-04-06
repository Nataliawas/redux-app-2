import { createStore, combineReducers } from 'redux'

import uiReducer from './ui/reducer'

const rootReducer = combineReducers({
    ui: uiReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store