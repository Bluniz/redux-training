import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk" 

import cars from './cars'

const reducer = combineReducers({
    cars
})

export default createStore(reducer, applyMiddleware(thunk))