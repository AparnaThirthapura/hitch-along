import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import helpers from '../utils/helpers';
import validator from 'validator';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleClick(event){

    if(validator.isEmpty(this.state.email) || 
       validator.isEmpty(this.state.password)) {

      alert("All fields are required.");
      return;
    }

    if (!validator.isEmail(this.state.email)) {
      alert("Please enter a valid email address");
      return;
    }

    helpers.verifyUser(this.state.email, this.state.password)
    .then((result) => {
      console.log("Printing the result after login  " + result);
      
      if(result === undefined){
        alert("Failed Login");
        this.props.parentContext.showLoginPage()
      }
      else{
        this.props.parentContext.showUserHomePage(result.data.email);
      }
    });
  }

  render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Hitch-Along Login"
            />

            <TextField
              type="email"
              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange={(event, newValue) => this.setState({email:newValue})}
            />

            <br />

            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({password:newValue})}
            />

            <br />

            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={(event) => this.handleClick(event)}
            />

            <div>
              Not signedup yet? Signup Now
              <MuiThemeProvider>
                <div>
                   <RaisedButton 
                    label='Signup' 
                    primary={true} 
                    style={style} 
                    onClick={(event) => this.props.parentContext.showSignupPage()}
                    />
               </div>
              </MuiThemeProvider>
            </div>

          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15
};

export default Login;
