import React, { PureComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { authService } from '../../../services/AuthenticationService';
import FooterComponent from '../../Footer/Footer';
import HeaderComponent from '../../Header/Header';

interface LayoutState {
}
interface Props extends RouteComponentProps<any> {
 }
interface LayoutState {
    isLoggedIn?: boolean;
    user: string;
}
class Layout extends PureComponent<Props, LayoutState> {
    state: LayoutState = {
        isLoggedIn: false,
        user: ''
    }
    componentDidMount() {
        authService.authInfo.subscribe(() => {
            this.setState({
                ...this.state,
                isLoggedIn: authService.isAuthenticated(),
                user: authService.authInfoValue()
            })
        })
    }
    handleLogout = () => {
        authService.logout();
        this.setState({
            ...this.state,
            isLoggedIn: authService.isAuthenticated(),
            user: authService.authInfoValue()
        })
    }
    render() {
        let headers, footer;
            headers = <HeaderComponent  
            isLoggedIn={this.state.isLoggedIn} 
            user = {this.state.user}
            handleLogout = {this.handleLogout}/>
            footer = <FooterComponent />
        return (
                <React.Fragment>
                    {headers}
                    <main className="content">
                        {this.props.children}
                    </main>
                    {footer}
                </React.Fragment> 
        );
    }
}

export default withRouter(Layout);