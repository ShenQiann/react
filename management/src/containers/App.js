import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Route} from 'react-router-dom'
import Actions from '../action'
import {Form, Icon, Input, Button, Checkbox, Row, Col,} from 'antd'
import { Typography } from 'antd' 
import Index from './Index'
import { setStore, getStore} from '../config/mUtils'
import 'antd/dist/antd.css'
import '../css/App.css';
const { Title } = Typography;


class App extends Component {
  constructor(props) {
    super(props);
    this.username = '';
    this.password = '';
  }
  componentWillMount() {
  }

  componentDidMount() {   
    let userInfo = getStore('userInfo') ? getStore('userInfo'):'';
    console.log(userInfo);
    if(!!userInfo) {
       let user = JSON.parse(userInfo);
       console.log(this.props.form);
       this.props.form.setFieldsValue(user); 
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUpdate(nextProps, nextState){
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/index')
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //     if(!!values) {
    //       let username = values.userName;
    //       let password = values.password;
    //       let remember = values.remember;
    //       if(!!remember) {
    //         setStore('userInfo',JSON.stringify(values))
    //       }
    //       //this.props.reqGetUser(username,password); 
          
    //     }
    //   }
    // });
  }

  render() {
    //console.log(this.props.app.isFetching);
    //this.props.user ? this.props.history.push('/index'):null
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App">
        {/* {this.props.app.isFetching ?<div>loading.......</div>:null} */}
        <div className="container">
          <Row>
          <Col md={8} lg={7} offset={13}>
            <Title level={2}>User Login</Title>
          </Col>
          <Col md={8} lg={7} offset={13}>
            <Form onSubmit={this.handleSubmit} className="login-form" id="components-form-demo-normal-login">
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
          </Col>
        </Row>
        </div>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(App);

export default connect(
  state => ({
  app:state.app,  
  user:state.app.user,
}),
(dispatch) => {
  return bindActionCreators({
    //reqGetUser: Actions.getUser,
  }, dispatch);
}
)(WrappedNormalLoginForm);
