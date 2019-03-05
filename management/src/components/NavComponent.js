import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'
import Actions from '../action'
import Sider from './Sider'
import '../css/components.css';


class NavComponent extends Component {
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
      <div className="nav">
      	<Sider match={this.props.match} data={this.props.firstNav}/>
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
)(NavComponent);
