import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createBrowserHistory} from 'history';
import rootreducer from '../reducers/rootreducer';
import {routerMiddleware,connectRouter} from 'connected-react-router';

const apphistory= createBrowserHistory();
const composes= window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;
const logger= createLogger();
export function configureStore(states)
{
    return createStore(
        connectRouter(apphistory)(rootreducer),states,composes(applyMiddleware(routerMiddleware(apphistory),
        thunkMiddleware,logger)));

}

