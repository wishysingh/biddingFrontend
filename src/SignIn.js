import React, { Component } from 'react';
import './SignIn.css';


class SignIn extends Component {

  constructor() {
    super();
    this.state = {
      sname:'',
      spassword:''
    }
  }

  async validateUser() {
    const headers=new Headers();
    headers.append('Content-Type','application/json');
    const options={
      method : 'POST',
      headers,
      body : JSON.stringify({
        "name" : this.state.sname,
        "password" : this.state.spassword
      })
    };
    const request = new Request('http://localhost:3000/api/users/signin',options);
    const response = await fetch(request);
    const status = await response.status;
    console.log(status);
    console.log(this.props);
    if(status===200)
    {
      this.props.history.push('/dashboard');
      this.props.onSignIn();
    }
  }

  onNameChange(event) {
    this.setState({
      sname:event.target.value
    });
  }
  onPassChange(event) {
    this.setState({
      spassword:event.target.value
    })
  }

  render(){
  return (
    <div class='signIn'>
      <div class='container'>
        <input className='input' type="text" placeholder='name' onChange={this.onNameChange.bind(this)}/>
        <input className='input' type="text" placeholder='password' onChange={this.onPassChange.bind(this)}/>
        <button class='signInButton' onClick={this.validateUser.bind(this)}>Sign In</button>
      </div>
   </div>
  );
}
}
export default SignIn;