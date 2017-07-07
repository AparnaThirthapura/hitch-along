import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class UserHomePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div>
        <MuiThemeProvider>
          <div>

          <AppBar
            className
             title="Welcome" 
             iconElementRight={
               <FlatButton 
                label="Log out" 
                onClick={(event) => this.props.parentContext.showLoginPage()}
               />}
           />

           Hi {this.props.email}. What do you want to do today?<br/><br/>

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
