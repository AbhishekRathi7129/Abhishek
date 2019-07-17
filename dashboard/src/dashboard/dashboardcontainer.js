import React,{Component} from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { loginaction } from '../actions/loginaction'
import Dashboardcomponent from '../dashboard/dashboardcomponent'


class Dashboardcontainer extends Component
{
    render()
    { const {details,username}= this.props
        console.log('details',details);
        console.log('username',username);
        return (
 <div>    
     
<DashboardReducForm
{...this.props}

/>
</div>
        ); 
    }
}
const DashboardReducForm = reduxForm({form:'DashboardForm'})(Dashboardcomponent);
export default connect(
    state=>({
        username:state.loginreducer.username,
        details:state.loginreducer.details,
    }))
    (Dashboardcontainer);

