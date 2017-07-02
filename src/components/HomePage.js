import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Signup from './Signup';
import UserHomePage from './UserHomePage';
import DriverPage from './DriverPage';
import RiderPage from './RiderPage';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      screen:[],
      page:'login'
    }
  }

  componentWillMount(){
    var screen=[];
    screen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
    this.setState({
                  screen: screen,
                  page: 'login'
                  })
  }

  showUserHomePage(email) {
    console.log("Login done!" + email);
    var screen = [];
    screen.push(<UserHomePage parentContext={this} email={email}/>);

    this.setState({
                   screen:screen,
                   page:'userHomePage'
                 });
  }

  showSignupPage() {
    var screen = [];
    screen.push(<Signup parentContext={this}/>);
    this.setState({
                   screen:screen,
                   page:'signup'
                 });
  }

  showLoginPage() {
    var screen = [];
    screen.push(<Login parentContext={this}/>);
    this.setState({
                   screen:screen,
                   page:'login'
                 });
  }

  showDriverPage(email){
    // console.log("--Inside Driverpage function--" + email);
    var screen = [];
    screen.push(<DriverPage parentContext={this} email={email}/>);
    this.setState({
                   screen:screen,
                   page:'driver'
                 });
  }

  showRiderPage(email){
    // console.log("--Inside RiderPage function--" + email);
    var screen = [];
    screen.push(<RiderPage parentContext={this} email={email}/>);
    this.setState({
                   screen:screen,
                   page:'rider'
                 });
  }

  render() {

    return (
      <div className="loginscreen">
        {this.state.screen}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default HomePage;
