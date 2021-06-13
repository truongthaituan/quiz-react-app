import React, { PureComponent, ReactNode } from 'react';
import Main from '../Quiz/Main';
import './QuizContent.css';
export default class QuizContent extends PureComponent<{}, {}> {
    componentDidMount(){

    }
    render() : ReactNode {
        return(
            <>
            <div className="quizContent">
                 <Main />
            </div>             
            </>
        );
    }
}
