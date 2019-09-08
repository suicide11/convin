
import React, { Component } from 'react';
import axios from 'axios'
import 'antd/dist/antd.css';
import Register from '../../api/Register/index'
import { Card, Row, Col } from 'antd';
import LoginForm from '../User/login'
import Registration from '../User/Register'
import Login  from '../../api/Login/index'
const tabList = [
  {
    key: 'Register',
    tab: 'Register',
  },
  {
    key: 'Login',
    tab: 'Login',
  },
];

class UserIndex extends Component {
  state = {
    key: 'Register',
    noTitleKey: 'app',
  };

  handleRegister = (data) => {
    console.log(data);
    const fullURL = 'https://'+ data['domain'] +'.api.convin.ai/persons/create_admin/'
    console.log(fullURL);
    data.primary_phone="+"+data.prefix+data.primary_phone;
    delete data.confirm;
    delete data.domain;
    delete data.prefix
    console.log(data)
    Register(fullURL,data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      })
  }
  handleLogin = (data)=>{
    console.log(data);
    const fullURL = 'https://'+ data['domain'] +'.api.convin.ai/persons/create_admin/'
    console.log(fullURL);
    delete data.domain;
    console.log(data)
    Login(fullURL,data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    const contentList = {
      Register: <Registration Register={this.handleRegister}  />,
      Login: <LoginForm Login={this.handleLogin} />,
    };
    return (
      <div style={{ marginTop: "3%" }}>
        <Row>
          <Col span={8} offset={8}>
            <Card
              style={{ width: '100%' }}
              tabList={tabList}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
            >
              {contentList[this.state.key]}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserIndex


