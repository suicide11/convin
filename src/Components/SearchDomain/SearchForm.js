import React, { Component } from 'react'
import 'antd/dist/antd.css';
import {
  Form,
  Icon,
  Input,
  Button
} from 'antd';


class SearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.search(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm">
        <Form.Item validating>
          {getFieldDecorator('domain', {
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
            Search
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const Search = Form.create({ name: 'normal_login' })(SearchForm);
export default Search;