import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class RiderPage extends Component {
  constructor(props){
    super(props);
    this.state={
      riderFrom:"",
      riderTo:""
    }
  }

  handleClick(event){
    var apiBaseUrl = "http://localhost:3000";
    console.log("values",this.state.riderFrom,this.state.riderTo, this.props.email);
  }

  render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
            className
             title="Please enter your driving details"
           />

           <br/>

           <TextField
             type="text"
             hintText="Enter your Start Address"
             onChange = {(event,newValue) => this.setState({riderFrom:newValue})}
             />

           <br/>

           <TextField
             type="text"
             hintText="Enter your Destination Address"
             onChange = {(event,newValue) => this.setState({riderTo:newValue})}
             />

           <br/>

           <RaisedButton label="Submit"
             primary={true}
             style={style}
             onClick={(event) => this.handleClick(event)}
           />
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin:15
};

export default RiderPage;
