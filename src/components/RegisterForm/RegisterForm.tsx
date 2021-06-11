import React, { ReactNode } from "react";
import { Form, Input, Button, Checkbox  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
interface FormValuesState {
    email?: string;
    password?: string;
    repassword?: string;
  }
export default class RegisterForm extends React.PureComponent<FormValuesState, {}> {
    render(): ReactNode {
        return(
            <>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="repassword"
                    rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Confirm Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="unchecked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link className="login-form-forgot" to="">
                    Forgot password
                    </Link>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" id="login-form-button">
                   Register
                    </Button>
                </Form.Item>
            </>
        );
    }
}