import React,{Component} from 'react'
import Logincontainer from './login/logincontainer';
import Dashboardcontainer from './dashboard/dashboardcontainer';
import { connect } from 'react-redux'
import {HashRouter as Router,Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  render(){
   const { isLoggedIn } = this.props;
   console.log('logged',isLoggedIn)
   if(!isLoggedIn)
   {return <Logincontainer />;}

  return (
    <div>
<Dashboardcontainer></Dashboardcontainer>
    
    </div>
  );
  }
}

export default connect(
  state=>({
    isLoggedIn:state.loginreducer.isLoggedIn   
  }))
  (App);

