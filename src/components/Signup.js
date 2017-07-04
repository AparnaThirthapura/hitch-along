import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import helpers from '../utils/helpers';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      phoneNo: ''
    }
  }

  handleClick(event){
    helpers.verifyAndSaveUser(this.state.name, this.state.email, this.state.password, this.state.phoneNo)
    .then((result) => {
      console.log(result);
      this.props.parentContext.showUserHomePage(result.data.email);
    });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
            className
             title="Signup"
           />

           <br/>

           <TextField
             type="name"
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />

           <br/>

           <TextField
             type="email"
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />

           <br/>

           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />

           <br/>

           <TextField
             type = "text"
             hintText="Enter your Phone Number"
             floatingLabelText="Phone number"
             onChange = {(event,newValue) => this.setState({phoneNo:newValue})}
             />

             <br />

           <RaisedButton label="Submit"
             primary={true}
             style={style}
             onClick={(event) => this.handleClick(event)}
           />

           <div>
             Already signed up? Go to Login page.
             <MuiThemeProvider>
               <div>
                  <RaisedButton label='Login' primary={true} style={style} onClick={(event) => this.props.parentContext.showLoginPage()}/>
              </div>
             </MuiThemeProvider>
           </div>

          </div>
         </MuiThemeProvider>
      </div>
    )
  }
}

const style = {
  margin:15
};
export default Signup;
