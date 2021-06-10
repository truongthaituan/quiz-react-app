import React, { PureComponent, ReactNode } from "react";
import { Menu } from "antd";
import {
    HomeOutlined,
    FireOutlined,
    UserOutlined,
    CalendarOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import './Header.css';

const { Item } = Menu;

interface HeaderState {
    current: string;
    user: boolean;
}

export default class Header extends PureComponent {
    state: HeaderState = {
        current: "home",
        user: false
    };
    private handleClick = (e: any) => {
        // console.log(e.key);
        this.setState(e.key);
    };

    render(): ReactNode {
        const { current, user } = this.state;
        return (
            <div className="header">
                    <Menu onClick={this.handleClick} mode="horizontal" style={{position: 'relative', display: 'flex', justifyContent: 'left'}}>
                        <Item className="logo">
                            <img src='/img/logo.png' alt="logo"/>
                        </Item>
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" style={{position: 'absolute', top: 4, right: 0}}>
                        <Item key="home" icon={<HomeOutlined />}>
                            <Link to="/home">Home</Link>
                        </Item>

                        <Item key="quiz" icon={<FireOutlined />}>
                            <Link to="/quiz">Quiz Challenge</Link>
                        </Item>

                        <Item key="view" icon={<CalendarOutlined />} > 
                            <Link to="/result">View Result</Link>
                        </Item>

                        {!user && (
                            <Item key="register" icon={<UserAddOutlined />}>
                                <Link to="/register">Register</Link>
                            </Item>
                        )}

                        {!user && (
                            <Item key="login" icon={<UserOutlined />} >
                                <Link to="/login">Login</Link>
                            </Item>
                        )}
                            {/* {user && (
                            <SubMenu
                                icon={<SettingOutlined />}
                                title={user.email && user.email.split("@")[0]}
                                className="float-right"
                            >
                                {user && user.role === "subscriber" && (
                                <Item>
                                    <Link to="/user/history">Dashboard</Link>
                                </Item>
                                )}
                    
                                {user && user.role === "admin" && (
                                <Item>
                                    <Link to="/admin/dashboard">Dashboard</Link>
                                </Item>
                                )}
                    
                                <Item icon={<LogoutOutlined />} onClick={logout}>
                                Logout
                                </Item>
                            </SubMenu>
                            )}  */}
                    </Menu> 
                </Menu>       
            </div>
        );
    }
}
