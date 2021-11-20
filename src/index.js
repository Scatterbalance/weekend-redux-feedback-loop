import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


//reducers
// test reducer
const tester = ( state='hello world', action ) =>{
    console.log( 'in tester reducer:', action );
    if( action.type === 'TEST' ){
        return action.payload;
    }
    return state;
}


// store
const feedbackStore = createStore(combineReducers({
    tester,
    
})
)
ReactDOM.render(<Provider store = {feedbackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
