import { Footer } from 'antd/lib/layout/layout';
import './Footer.css'
import React, { PureComponent } from 'react'
export default class FooterComponent extends PureComponent {
    render(){
        let date = new Date();
        return (
            <Footer className="appFooter">React Challenge ©{date.getFullYear()} Created by TTT</Footer>
        );
    }
}
