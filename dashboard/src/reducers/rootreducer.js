import {combineReducers} from 'redux'
import {loginreducer} from './loginreducer'
import { reducer as formReducer} from 'redux-form'
const rootreducer = combineReducers(
    {
form:formReducer,
loginreducer,
    }
);
export default  rootreducer;