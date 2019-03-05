import React, { Component } from 'react';
import { Menu, Icon, Switch } from 'antd';
import {Link} from 'react-router-dom'
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '',
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    let match = this.props.match;
     let indexFlag = 0;
    console.log(match);
    return (
      <div>
        <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <br />
        <br />
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          {
          	this.props.data && this.props.data.map((item,index)=>{
          		return (
          				 <SubMenu key={index} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
				           {
                    item.childNav && item.childNav.map((item,index)=>{
                    let url = `${match.path}${item.url}`;
                    console.log(url);
				           	 return (
        								<Menu.Item key={indexFlag++}>
        									<Link to={url}>{item.title}</Link>
        								</Menu.Item>
				           	 )
				            })
                 }
				         </SubMenu>
          			)
          	})
          }
        </Menu>
      </div>
    );
  }
}
export default Sider;