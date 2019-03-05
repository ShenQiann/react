import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
class EditCatalogContainer extends Component {
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
      <div>
       EditCatalogContainer
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
)(EditCatalogContainer);
