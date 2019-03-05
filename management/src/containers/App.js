import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Route} from 'react-router-dom'
import Actions from '../action'
import Index from './Index'
import 'antd/dist/antd.css'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.submitHandle = this.submitHandle.bind(this);
  }
  componentWillMount() {
  }

  componentDidMount() {   
   
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState){
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }
  submitHandle(e){
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.reqGetUser(username,password); 
    
  }
  render() {
    console.log(this.props.app.isFetching);
    this.props.user ? this.props.history.push('/index'):null
    return (
      <div className="App">
        {this.props.app.isFetching ?<div>loading.......</div>:null}
        <form>
          <div>
            <label>username:<input ref="username" name="username" type="text" placeholder="please input your username"/></label> 
          </div>
          <div>
            <label>password:<input ref="password" name="password" type="password" placeholder="please input your password"/></label>
          </div>
          <div>
            <button type="button">cancel</button>
            <button type="button" onClick={this.submitHandle}>login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
  app:state.app,  
  user:state.app.user,
}),
(dispatch) => {
  return bindActionCreators({
    reqGetUser: Actions.getUser,
  }, dispatch);
}
)(App);
