import React, { PureComponent, ReactNode } from 'react';
import './RequirePage.css';
import {
    WarningOutlined
} from "@ant-design/icons";
import { Link } from 'react-router-dom';

export default class RequirePage extends PureComponent {
    render(): ReactNode {
        return(
            <>
               <div className="requirePage">
                    <WarningOutlined style={{color: '#e58327', fontSize: '60px'}} />
                    <h1 style={{textAlign: 'center'}}>Are you ready for challenge?</h1>
                    <p  style={{textAlign: 'center'}}>The quiz is ready to start but you need to login first to accept it.</p>
                    <Link id = 'moveToLogin' to = {'/'}>
                        Login to your account
                    </Link>
                </div>
            </>
        );
    }
}