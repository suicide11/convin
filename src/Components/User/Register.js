
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class Register extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.Register(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Domain Name">
          {getFieldDecorator('domain', {
            rules: [{ required: true, message: 'Please enter your Registered Domain!' }],
          })(
              <Input placeholder="Domain Name" />

          )}
        </Form.Item>
        <Form.Item label="First Name">
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: 'Please enter your First Name!' }],
          })(
              <Input placeholder="First Name" />

          )}
        </Form.Item>
        <Form.Item label="Middle Name">
          {getFieldDecorator('middle_name', {
            rules: [{ required: true, message: 'Please enter your Middle Name!' }],
          })(
              <Input placeholder="Middle Name" />
          )}
        </Form.Item>
        <Form.Item label="Last Name">
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: 'Please enter your Last Name!' }],
          })(
              <Input placeholder="Last Name" />
          )}
        </Form.Item>
        <Form.Item label="Username">
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please enter your username!' }],
          })(
              <Input placeholder="Username" />

          )}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Phone Number">
          {getFieldDecorator('primary_phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const Registration = Form.create({ name: 'register' })(Register);
export default Registration
