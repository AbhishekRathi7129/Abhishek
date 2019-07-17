import React,{Component} from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { loginaction } from '../actions/loginaction'

import Logincomponent from '../login/logincomponent'


class Logincontainer extends Component
{
    submitFunction(data)
    {  
        console.log('data is',data)
        this.props.loginaction(data);
    }
    render()
    {
        return (
 <div>
     
<LoginReducForm
{...this.props}
submitFunction={this.submitFunction.bind(this)}
/>
</div>
        );
    }
}
const LoginReducForm = reduxForm({form:'LoginForm'})(Logincomponent);
export default connect(
    state=>({
        username:state.username,
        details:state.details
    }),{loginaction})
    (Logincontainer);

