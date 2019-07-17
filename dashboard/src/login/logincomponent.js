import React,{Component} from 'react';

import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';



const validateusername = value=>{
    const regex= new RegExp('[a-zA-z0-9]{1,}');
    if(!value) return 'Field is  required' 
    return regex.test(value)?
    undefined
    :'Invalid';
};
const validatepassword = value=>{
    if(!value) return 'Field is  required'
    
};

const style = {
    margin: 15,
  };
class Logincomponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={ 
            username:'',
            password:''
        }
    }
setusername(event){
    this.setState({
        username:event.target.value
    })
}
setpassword(event){
    this.setState({
        password:event.target.value
    })
}
    handleSubmit(event)
    {let data={};
        const {submitFunction,handleSubmit}= this.props;
        data={
            username:this.state.username,
            password:this.state.password
        }
        submitFunction(data);
    }
    render(){
        const {submitFunction,handleSubmit}= this.props;
        
        return(
           
          <div>
           <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>       
    
            <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
          
           <TextField
            style={style}
             hintText="Enter your UserName"
             type="email"
             floatingLabelText="Email"
             onChange={this.setusername.bind(this)}
             />
           <br/>
           <TextField
            style={style}
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange={this.setpassword.bind(this)}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} type ="submit"/>
          </div>
         </MuiThemeProvider>
            </div>
                    </form>
                    </div>
                    
                
            
        );
    }
}
export default Logincomponent;