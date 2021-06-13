import React, { PureComponent, ReactNode } from 'react';
import { Button } from 'antd';
import './MyButton.css';
interface MyButtonProps {
    text: string;
}
class MyButton extends PureComponent<MyButtonProps, {}> {
    render() :ReactNode{
        return (
            <Button style={{
                    background: 'linear-gradient(90deg, #2c31cf 0%, #5419dd 100%)',
                    color: '#fff',
                    margin: '20px'
                }}
                className='btnStart'
            >
            {this.props.text}
            </Button>
        );
    }
};

export default MyButton;