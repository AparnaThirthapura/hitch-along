import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import helpers from '../utils/helpers';

class RiderResultPage extends Component {
  constructor(props) {
    super(props);
    console.log("Received rider results");
    console.log(this.props.result);
  }

  handleClick(phoneNo) {
    helpers.sendText(phoneNo, this.props.riderEmail)
    .then((result) => {
      console.log('Sent message: ' + result);
      alert("Text sent successfully.");
    });
  }

  render(){

    var rows = [];

    {this.props.result.data.map((driver, index) => {
           rows.push(<TableRow key={index}>
             <TableRowColumn>{driver.driverName}</TableRowColumn>
             <TableRowColumn>{driver.driverEmail}</TableRowColumn>
             <TableRowColumn><RaisedButton
                                label="Send Text"
                                primary={true}
                                onClick={(event) => this.handleClick(driver.driverPhoneNo)}/></TableRowColumn>
           </TableRow>);
      })}

    if(rows.length === 0) {
      rows.push(<TableRow key='1'>
        <TableRowColumn>No drivers found for your route. Please check back later.</TableRowColumn>
        </TableRow>);
    }

    return(
      <div>
        <MuiThemeProvider>
          <div>
          
          <AppBar
             title="Thank You"
             iconElementRight={
               <FlatButton 
                label="Log out" 
                onClick={(event) => this.props.parentContext.showLoginPage()}
               />}
           />           
           <br/>

           <div>
             <h3>Displaying the Driver Details</h3>
           </div>

           {<Table selectable="false">
             <TableBody stripedRows="true">
               {rows}
              </TableBody>
          </Table>}

          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default RiderResultPage;
