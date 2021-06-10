import React, { PureComponent } from "react";
import Header from "../../components/Header/Header";
import LoginForm from '../../components/LoginForm/LoginForm'

export default class HomePage extends PureComponent {
    render(){
        return(
            <React.Fragment>
                <Header />
                <LoginForm />
            </React.Fragment>
        );
    }
}