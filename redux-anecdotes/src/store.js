import { createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import anecdotesReducer from "./reducers/anecdoteReducer"
import notificationReducer from "./reducers/notificationReducer"
import filterReducer from "./reducers/filterReducer"
import anecdotesService from './services/anecdotes'

const reducer = combineReducers({
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    filter: filterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

anecdotesService.getAll()
    .then(anecdotes => 
        anecdotes.forEach(anecdote => {
            store.dispatch({ type: 'CREATE', data: anecdote})
        }))
    .then(() => 
        setTimeout(() => store.dispatch({ type: 'REMOVE_NOTIFICATION'}), 5000))

export default store