import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Actions from '../action'
import Header from '../components/HeaderComponent'
import Nav from '../components/NavComponent'
import AddCatalogContainer from './catalog/AddCatalogContainer'
import AddBookContainer from './book/AddBookContainer'
import DelCatalogContainer from './catalog/DelCatalogContainer'
import DelBookContainer from './book/DelBookContainer'
import EditCatalogContainer from './catalog/EditCatalogContainer'
import EditBookContainer from './book/EditBookContainer'
import NoPage from './404'
import Welcome from './welcome'

import '../css/index.css';

class Index extends Component {
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
    let firstNav = [
    {
      'url':'/index',
      'title':'主页'
    },
    {
      'url':'/book',
      'title':'图书管理',
      'childNav':[
        {'url':'/addBook','title':'添加图书','component':AddBookContainer},
        {'url':'/delBook','title':'删除图书','component':DelBookContainer},
        {'url':'/editBook','title':'修改图书','component':EditBookContainer}
      ]
    },
    {
      'url':'/catalog',
      'title':'类别管理',
      'childNav':[
        {'url':'/addCatalog','title':'添加分类','component':AddCatalogContainer},
        {'url':'/delCatalog','title':'删除分类','component':DelCatalogContainer},
        {'url':'/editCatalog','title':'修改分类','component':EditCatalogContainer}
      ]
    },
    {
      'url':'/worker',
      'title':'人员管理'
    },
    {
      'url':'/room',
      'title':'馆室管理'
    },
    {
      'url':'/other',
      'title':'其他管理'
    }
    ]
    console.log(this.props.match);
    return (
        <div>
          <div><Header></Header></div>
          <div> <Nav match={this.props.match} firstNav={firstNav}></Nav></div>
          <div className="info">
            <Switch>
               <Route path={`${this.props.match.path}\/`}  component={Welcome} exact />
               <Route path={`${this.props.match.path}\/addbook`} component={AddBookContainer}></Route>
               <Route path={`${this.props.match.path}\/delBook`} component={DelBookContainer}></Route>
               <Route path={`${this.props.match.path}\/editBook`} component={EditBookContainer}></Route>
               <Route path={`${this.props.match.path}\/addCatalog`} component={AddCatalogContainer}></Route>
               <Route path={`${this.props.match.path}\/delCatalog`} component={DelCatalogContainer}></Route>
               <Route path={`${this.props.match.path}\/editCatalog`} component={EditCatalogContainer}></Route>
               <Route path={`${this.props.match.path}\/:a`} component={NoPage}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default connect(
  state => ({
  user:state.app.user,
}),
(dispatch) => {
  return bindActionCreators({
    reqGetUser: Actions.getUser,
  }, dispatch);
}
)(Index);
