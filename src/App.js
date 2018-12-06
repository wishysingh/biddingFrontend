import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import {BrowserRouter, Router,Switch, Link} from 'react-router-dom';
import NavbarLogin from './NavbarLogin';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';




class App extends Component {
  constructor() {
    super();
    this.state = {
      aname:'',
      apassword:'',
      aphone:'',
      aemail:''
    }
  }



  async registerUser() {
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    const options={
      method : 'POST',
      headers,
      body : JSON.stringify({
        "name" : this.state.aname,
        "email" : this.state.aemail,
        "phone" : this.state.aphone,
        "password" : this.state.apassword
      })
    };
    const request = new Request('http://localhost:3000/api/users',options);
    const response = await fetch(request);
    const status = await response.status;
  }


  onNameEnter(event) {
    this.setState({
      aname:event.target.value
    });
  }
  onEmailEnter(event) {
    this.setState({
      aemail:event.target.value
    });
  }
  onPhoneEnter(event) {
    this.setState({
      aphone:event.target.value
    });
  }
  onPassEnter(event) {
    this.setState({
      apassword:event.target.value
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route exact path="/" component={NavbarLogin} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/signup" render={()=><SignUp aname={this.onNameEnter.bind(this)} aemail={this.onEmailEnter.bind(this)} aphone={this.onPhoneEnter.bind(this)} apassword={this.onPassEnter.bind(this)} makeentry={this.registerUser.bind(this)}/>} />
            <Route path="/dashboard" render={()=><Dashboard items={this.props.items}/>} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
