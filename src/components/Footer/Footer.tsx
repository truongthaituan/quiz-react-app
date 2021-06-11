import { Footer } from 'antd/lib/layout/layout';
import React, { PureComponent } from 'react'
export default class FooterComponent extends PureComponent {
    render(){
        let date = new Date();
        return (
            <Footer style={{ textAlign: 'center' }}>React Challenge ©{date.getFullYear()} Created by TTT</Footer>
        );
    }
}
