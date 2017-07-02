import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UserHomePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        Welcome, {this.props.email} !
        <MuiThemeProvider>
          <div>
           <RaisedButton label="I am Driving"
             primary={true}
             style={style}
             onClick={(event) => this.props.parentContext.showDriverPage(this.props.email)}/>

           <RaisedButton label="I am Riding"
             primary={true}
             style={style}
             onClick={(event) => this.props.parentContext.showRiderPage(this.props.email)}/>
          </div>
         </MuiThemeProvider>
      </div>
    )
  }
}

const style = {
  margin:15
};
export default UserHomePage;
