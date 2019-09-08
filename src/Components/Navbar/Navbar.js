import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import img from '../../logo.svg'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu style={{textAlign:"right"}} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item style={{float:"left"}} key="icon" >
          <img src={img} />
          Project
        </Menu.Item>
        <Menu.Item key="search" >
          <Icon type="search" />
          Search Domain
        </Menu.Item>
        <Menu.Item key="deploy" >
          <Icon type="appstore" />
          Create
        </Menu.Item>
        <Menu.Item key="user">
          <Icon type="user" />
          Login
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar