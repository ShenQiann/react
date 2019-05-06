import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Menu} from 'antd'
import Actions from '../action'

import '../css/components.css';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
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
  render() {
    return (
      <div className="header">
      <div className="logo" />
      <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
      >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
      </div>
      );
    }
  }

  export default connect(
  state => ({
    // user:state.app.user,
  }),
  (dispatch) => {
    return bindActionCreators({
      // reqGetUser: Actions.getUser,
    }, dispatch);
  }
  )(HeaderComponent);
