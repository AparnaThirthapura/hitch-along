import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class DriverResultPage extends Component {

  render(){

    return(
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Thank you"
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

const style = {
  margin:15
};

export default DriverResultPage;
