import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import helpers from '../utils/helpers';


class DriverPage extends Component {
  constructor(props){
    super(props);
    this.state={
      driverFrom:"",
      driverTo:""
    }
  }

  handleClick(event){
    helpers.saveDriverInfo(this.props.email, this.state.driverFrom, this.state.driverTo)
    .then((result) => {
      console.log(result);
    });
    this.props.parentContext.showDriverResultPage();
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
             onChange = {(event,newValue) => this.setState({driverFrom:newValue})}
             />

           <br/>

           <TextField
             type="text"
             hintText="Enter your Destination Address"
             onChange = {(event,newValue) => this.setState({driverTo:newValue})}
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

export default DriverPage;
