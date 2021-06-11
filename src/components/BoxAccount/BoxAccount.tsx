import React, { ReactNode } from "react";
import { Form, Radio  } from 'antd';
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import './BoxAccount.css'
interface LayoutValuesState {
    formLayout?: string;
  }
export default class BoxAccount extends React.PureComponent<LayoutValuesState, {}> {
    state: LayoutValuesState = {
        formLayout: "login"
      };
      componentDidUpdate() {
        console.log(this.state.formLayout)
      }
    onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    onFormLayoutChange = (e: any) => {
        this.setState({formLayout: e.target.value});
    };
    render(): ReactNode {
        return(
            <>
            <div className="wrap-form-head-register">
            <div className="form-head-register">
            <h3 className="title-block">Start now</h3>
            <Form name="normal_login"
                className="login-form"
                initialValues={{ layout: this.state.formLayout }}
                onFinish={this.onFinish} >
                     <Form.Item name="layout">
                    <Radio.Group value={this.state.formLayout} onChange={this.onFormLayoutChange}>
                        <Radio.Button value="login">Login</Radio.Button>
                        <Radio.Button value="register">Register</Radio.Button>
                    </Radio.Group>
                    </Form.Item>
                            {
                                this.state.formLayout === 'login' ? <LoginForm /> : null
                            } 
                            {
                                this.state.formLayout === 'register' ? <RegisterForm /> : null
                            } 
                    </Form>
               </div>
               </div>
            </>
        );
    }
}