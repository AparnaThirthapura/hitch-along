import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import helpers from '../utils/helpers';

class RiderPage extends Component {
  constructor(props){
    super(props);
    this.state={
      riderFrom:"",
      riderTo:""
    }
  }

  handleClick(event){

    helpers.saveRiderInfo(this.props.email, this.state.riderFrom, this.state.riderTo)
    .then((result) => {
      console.log(result);
      this.props.parentContext.showRiderResultPage(result, this.props.email);
    });
  }

  render(){
    return(
      <div>
        <MuiThemeProvider>
          <div>
          
          <AppBar
             title="Please enter your riding details"
             iconElementRight={
               <FlatButton 
                label="Log out" 
                onClick={(event) => this.props.parentContext.showLoginPage()}
               />}
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
