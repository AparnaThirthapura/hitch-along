import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class DriverResultPage extends Component {

  render(){

    return(
      <div>
        <MuiThemeProvider>
          <div>
          
          <AppBar
             title="Thank you"
             iconElementRight={
               <FlatButton 
                label="Log out" 
                onClick={(event) => this.props.parentContext.showLoginPage()}
               />}
           />           
           <br/>

           <div>
             <h3>A Rider who wants to join you will send you a message.</h3>
           </div>

          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default DriverResultPage;
