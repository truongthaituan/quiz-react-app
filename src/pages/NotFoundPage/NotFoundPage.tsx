import React, { PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends PureComponent {
    render(): ReactNode {
        return(
            <>
                 <div className="requirePage">
                    <img src = "/img/404.png" alt = "404 Not Found" style={{width: '300px'}}/>
                    <h1 style={{textAlign: 'center'}}>404</h1>
                    <p  style={{textAlign: 'center'}}>Sorry, you have accessed a non-existing route.</p>
                    <Link id = 'moveToLogin' to = {'/'}>
                       Back Home
                    </Link>
                </div>
            </>
        );
    }
}