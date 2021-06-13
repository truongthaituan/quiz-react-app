import React, { PureComponent, ReactNode } from "react";
import { Input, Menu, Modal } from "antd";
import {
    HomeOutlined,
    FireOutlined,
    UserOutlined,
    LockOutlined,
    LogoutOutlined
} from "@ant-design/icons";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import './Header.css';
import { authService } from "../../services/AuthenticationService";
import swal from "sweetalert";

const { Item } = Menu;

interface HeaderState {
    current: string;
    modalVisible: boolean;
    username: string;
    password: string;
}

interface RouteProps extends RouteComponentProps {}
interface HeaderProps {
    isLoggedIn?: boolean;
    user?: any;
    handleLogout: () => void;
 }

class HeaderComponent extends PureComponent<HeaderProps & RouteProps, HeaderState> {
    state: HeaderState = {
        current: "home",
        modalVisible: false,
        username: "",
        password: ""
    };
    private handleClick = (e: any) => {
        this.setState({current: e.key});
    };
    private openModal = () => this.setState({ modalVisible: true });
    private closeModal = () => this.setState({ modalVisible: false });
    private onChangeUsername = (event: any) => this.setState({ username : event.target.value});
    private onChangePassword = (event: any) => this.setState({ password : event.target.value});
    private onSubmit = () => {
      this.closeModal();
      let history = this.props.history;
      if (authService.login(this.state.username, this.state.password)) {
          swal("Login successfully!", "You can fight now!", "success");
          setTimeout(() => {
              history.push('/quiz');
          }, 1000);
      } else {
          swal("Login failed!", "Authentication failed. Please check your username/password", "warning");
          this.openModal()
      }
    };
    render(): ReactNode {
        const { current, modalVisible } = this.state;
        return (
            <div className="header">
                    <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                        <Item key='logo' id="logo">
                            <img src='/img/logo.png' alt="logo"/> 
                        </Item>
                        {!this.props.isLoggedIn && (
                            <Item key="home" icon={<HomeOutlined />} >
                            <Link to="/">Home</Link>
                            </Item>
                        )}
                        <Item key="quiz" icon={<FireOutlined />}>
                            <Link to="/quiz">Quiz Challenge</Link>
                        </Item>

                        {!this.props.isLoggedIn && (
                            <Item key="login" icon={<UserOutlined />} style={{float: 'right'}} >
                                <a onClick={this.openModal}>Login</a>
                            </Item>
                        )}
                         {this.props.isLoggedIn && (
                              <Item key="user" icon={<UserOutlined />} style = {{cursor:'not-allowed', pointerEvents:'none' }}>
                                  Hello {this.props.user}
                          </Item>
                        )} 
                          {this.props.isLoggedIn && (
                              <Item key="logout" icon={<LogoutOutlined />}  >
                              <Link to="/" onClick={this.props.handleLogout}>Logout</Link>
                          </Item>
                        )}
                        </Menu>  
                        <Modal title="Login to your account" 
                        visible={modalVisible} 
                        onCancel={this.closeModal} 
                        onOk={this.onSubmit} width='500px' >
                        <Input name='username'
                            type='text'
                            placeholder="user"
                            prefix={<UserOutlined />}
                            onPressEnter={this.onSubmit}
                            onChange={this.onChangeUsername}
                        />
                        <Input name='password'
                            type='password'
                            placeholder="123456"
                            prefix={<LockOutlined />}
                            onPressEnter={this.onSubmit}
                            onChange={this.onChangePassword}
                        />
                        </Modal>
            </div>
        );
    }
}
export default withRouter(HeaderComponent)