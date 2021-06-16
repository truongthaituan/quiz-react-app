import React, { PureComponent } from 'react';
//@ts-ignore
import Fade from 'react-reveal/Fade';
import MyButton from '../util/MyButton';
interface PopupState {
    time: string;
    title: string;
    text: string;
    buttonText: string;
}
interface PopupProps {
    total: number;
    style: any;
    score: number;
    isFinished: boolean;
    startQuiz: () => void;
}
class Popup extends PureComponent<PopupProps, PopupState> {
        state: PopupState = {
            time: 'start',
            title: 'Welcome to React Quiz',
            text: 'This is a quiz application built using ReactJS. <br /><br />',
            buttonText: 'Start the quiz' 
        };
        
        componentDidUpdate = () => {
            if(this.props.isFinished){
                this.setState({
                    text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + 
                    '</strong> out of <strong>' + 
                    this.props.total +
                    '</strong> questions right.'
                })
            }
        }
    popupHandle = () => {   
        if(this.state.time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });

            //alert("START THE QUIZ");
            this.props.startQuiz();
        } 
        else {
            window.location.reload();// restart the application
       }
    }
     
    createMarkup(text: any) {
        return {__html: text};
    }


    
    render() {
       
        let { title, text, buttonText } = this.state;
        return (
            <Fade delay={500}>
                <div className="popup-container" style={this.props.style}>
                    <div className="container">
                        <div className="ml-5 col-md-10 col-10">
                            <div className="popup">
                                <h1>{title}</h1>
                                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                                <span onClick={this.popupHandle}>
                                    <MyButton text={buttonText} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Popup; 

