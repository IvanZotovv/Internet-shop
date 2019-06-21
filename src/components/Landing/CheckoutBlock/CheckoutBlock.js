import React from 'react';
import styled from 'styled-components';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { Link } from 'react-router-dom';
import CheckoutBlockGrandTotal from './CheckoutBlockGrandTotal';
import * as ROUTES from '../../../constants/routes';
const ChekoutMainBlock = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
`;
const FormBlock = styled.div`
  width: 50%;
`;
const FormLabel = styled.input`
  display: block;
  width: 80%;
  height: calc(1.5em + .25rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
const GrandTotal = styled.div`
  width: 100%;
`;
const GrandBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const OrderSummaryBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const OrderSummaryTitle = styled.h2`
  padding: 25px 0;
`;
const OpderEdit = styled.a`
  line-height: 110px;
`;

const AutoCompleteOption = AutoComplete.Option;


class CheckoutBlock extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <ChekoutMainBlock>
        <FormBlock>
          <OrderSummaryTitle>Billing information</OrderSummaryTitle>
          <Form onSubmit={this.handleSubmit}>
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
              })(<FormLabel />)}
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
              })(<FormLabel />)}
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
              })(<FormLabel onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item
              label={(
                <span>
              Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              )}
            >
              {getFieldDecorator('nickname', {
                rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
              })(<FormLabel />)}
            </Form.Item>
            <Form.Item label="Phone Number">
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(<FormLabel />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>
              I have read the
                  {' '}
                  <a href="">agreement</a>
                </Checkbox>,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
            Register
              </Button>
            </Form.Item>
          </Form>
        </FormBlock>
        <GrandBlock>
          <OrderSummaryBlock>
            <OrderSummaryTitle>Order summary</OrderSummaryTitle>
            <Link style={{ textDecoration: 'none' }} to={ROUTES.BASKET}>
              <OpderEdit>Edit cart</OpderEdit>
            </Link>
          </OrderSummaryBlock>
          <GrandTotal>
            <CheckoutBlockGrandTotal />
          </GrandTotal>
        </GrandBlock>
      </ChekoutMainBlock>
    );
  }
}


export default Form.create({ name: 'register' })(CheckoutBlock);
