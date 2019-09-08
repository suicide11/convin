import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd';


class CreateForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.CreateDomain(values)
      }
    });
  };
  render() {
    console.log(this.props)
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm">
        <Form.Item>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: "please enter the domain name" }],
          })(
            <Input
              prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }}
                placeholder="Domain Name"
              />}
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Create
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const Create = Form.create({ name: 'normal_login' })(CreateForm);
export default Create;