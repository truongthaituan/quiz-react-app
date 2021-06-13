import React, { PureComponent, ReactNode } from 'react'
import QuizContent from '../../components/QuizContent/QuizContent'
import { authService } from '../../services/AuthenticationService';
interface QuizPageProps {
    isLoggedIn?: boolean;
    username?: string;
}
export default class QuizPage extends PureComponent<QuizPageProps, {}> {
    componentDidMount = () => {
        console.log(authService.authInfoValue)
    }
    render(): ReactNode {
        return(
            <>
               <QuizContent />
            </>
        );
    }
}