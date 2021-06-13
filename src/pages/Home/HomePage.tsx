import React, { PureComponent, ReactNode } from 'react'
import { Col, Row } from "antd";
import './HomePage.css'
import LoginForm from '../../components/LoginForm/LoginForm';
import { RouteComponentProps, withRouter } from 'react-router';
import { authService } from '../../services/AuthenticationService';
interface HomeSate {
    loading?: boolean;
}
interface RouteProps extends RouteComponentProps{
   
}
interface HomePageProps {
}
class HomePage extends PureComponent<RouteProps & HomePageProps, HomeSate> {
    state: HomeSate = {
            loading: false
    } 
    componentDidMount() {
        console.log(authService.isAuthenticated())
    }
    render(): ReactNode{
        return(
            <React.Fragment>
                <div className="banner">
                    <Row>
                        <Col xs={24} xl={12}>
                            <img src = "/img/react_challenge.png" alt='React Challenges' className='imgChallenge'/>
                        </Col>
                        <Col xs={24} xl={12}>
                            <LoginForm />
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
}
export default withRouter(HomePage)