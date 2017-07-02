import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
    var apiBaseUrl = "http://localhost:3000";
    console.log("values",this.state.name,this.state.email,this.state.password);
    //To be done:check for empty values before hitting submit
    var payload={
      "name": this.state.name,
      "email":this.state.email,
      "password":this.state.password,
      "phoneNo":this.state.phoneNo
    };
    console.log(payload);

    var self = this;

    axios.post(apiBaseUrl + '/signup', payload)
    .then(function (response) {
        console.log("Response from signup: " + response.data);
        if (response.status === 200) {
          self.props.parentContext.showUserHomePage(response.data.email);
        }
    })
    .catch(function (error) {
        console.log("Error from signup: " + error);
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
