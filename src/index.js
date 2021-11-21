import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//reducers
// test reducer
const tester = ( state='hello world', action ) =>{
    console.log( 'in tester reducer:', action );
    if( action.type === 'TEST' ){
        return action.payload;
    }
    return state;
}

const feedback= (state=[],action)=>{
    console.log('in feedback reducer:', action);
    console.log('index state:', state);
    if(action.type === 'ADD_FEEDBACK'){
        return state = [...state, action.payload];
    }
    else if(action.type === 'RESET'){
        return state = [];
    }
    console.log('feedback:',state);
        return state
}


// store
const feedbackStore = createStore(combineReducers({
    tester,
    feedback
    
}
),
applyMiddleware(
    logger
    )
);
ReactDOM.render(<Provider store = {feedbackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
