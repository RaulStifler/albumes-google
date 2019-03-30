import { createStore, combineReducers, compose } from 'redux';
import persistState from 'redux-localstorage';

function tokenReducer(state='',action){
    switch(action.type){
        case 'SET_TOKEN':
            return action.token;
        case 'CLEAR_TOKEN':
            return '';
        default:
            return state;
    }
}

function userReducer(state=null,action){
    switch(action.type){
        case 'SET_USER':
            return action.user;
        case 'CLEAR_USER':
            return null;
        default:
            return state;
    }
}

function albumesReducer(state=[],action){
    switch(action.type){
        case 'SET_ALBUMES':
            return action.albumes;
        case 'CLEAR_ALBUMES':
            return null;
        default:
            return state;
    }
}

function albumReducer(state=null,action){
    switch(action.type){
        case 'SET_ALBUM':
            return action.album;
        case 'CLEAR_ALBUM':
            return null;
        default:
            return state;
    }
}

function photosReducer(state=[],action){
    switch(action.type){
        case 'SET_PHOTOS':
            return action.photos;
        case 'CLEAR_PHOTOS':
            return [];
        default:
            return state;
    }
}

let rootReducer = combineReducers({
    token: tokenReducer,
    user: userReducer,
    albumes: albumesReducer,
    albumSelected: albumReducer,
    photos: photosReducer
})

let mainEnhancer = compose(persistState('token'))

export default createStore(rootReducer,{},mainEnhancer);