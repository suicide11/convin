import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.Login(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <center>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('domain', {
            rules: [{ required: true, message: 'Please enter your Registered Domain!' }],
          })(
              <Input placeholder="Domain Name" />

          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input a ussname!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
      </center>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm