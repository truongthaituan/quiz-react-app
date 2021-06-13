import React, { ReactNode } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, LaptopOutlined } from '@ant-design/icons';
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import swal from 'sweetalert';
import './LoginForm.css'
import { authService } from "../../services/AuthenticationService";
interface FormValuesState {
    user?: string;
    isLoggedIn?: boolean;
}
interface Props extends RouteComponentProps<any> {
    /* Parent component's props*/
}

class LoginForm extends React.PureComponent<Props, FormValuesState> {
    state: FormValuesState = {
        user: "",
        isLoggedIn: false
    };
    componentDidUpdate() {
    }
    onFinish = (values: any) => {
        let history = this.props.history;
        if (authService.login(values.username, values.password)) {
            swal("Login successfully!", "You can fight now!", "success");
            setTimeout(() => {
                history.push('/quiz');
            }, 1000);
        } else {
            swal("Login failed!", 
            "Authentication failed. Please check your username/password",
             "warning");
        }
    };
    render(): ReactNode {
        return (
            <>
                <div className="wrap-form-head-register">
                    <div className="form-head-register">
                        <h3 className="title-block">Start now</h3>
                        <div className="iconLogin">
                            <LaptopOutlined style={{ color: '#e58327', fontSize: '60px' }} />
                        </div>
                        <Form name="normal_login"
                            className="login-form"
                            onFinish={this.onFinish} >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]} >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="user" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]} >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password" placeholder="123456" />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link className="login-form-forgot" to="">
                                    Forgot password
                                </Link>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" id="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(LoginForm)