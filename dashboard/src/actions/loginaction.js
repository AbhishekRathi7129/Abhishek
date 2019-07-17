

import * as types from '../constants/actiontypes'
import {createHashHistory} from 'history'
 const history= createHashHistory();
export function loginaction(data)
{
    console.log('data is',data)
return dispatch =>{
    if(data.username==='hruday@gmail.com' && data.password==='hruday123')
    {
        
       dispatch( loginSuccess(history,data));
    }
    else
    {
       
        dispatch( loginFailure());
    }


};
}

export function loginSuccess(history,data)
{
    
return dispatch =>{
   dispatch({ 
        type:types.LOGIN,
        username:data.username,
        isLoggedIn:true,
        loginMessage:'Login Success'
    });
    history.push('/dashboard')
};
}

export function loginFailure()
{
   
return dispatch =>{
    dispatch({

        type:types.LOGIN,
        isLoggedIn:false,
        loginMessage:'Username/Password Incorrect'
    });
};
}
