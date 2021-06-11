import React, { PureComponent, ReactNode } from 'react'
import { Col, Row } from "antd";
import './Banner.css'
import BoxAccount from '../BoxAccount/BoxAccount';

export default class Banner extends PureComponent {

    render(): ReactNode {
            return(
                <>
                <div className="banner">
                    <Row>
                        <Col xs={24} xl={12}>
                            <img src = "/img/react_challenge.png" alt='React Challenges' className='imgChallenge'/>
                        </Col>
                        <Col xs={24} xl={12}>
                            <BoxAccount />
                        </Col>
                    </Row>
                </div>
                </>
            );

    }
}