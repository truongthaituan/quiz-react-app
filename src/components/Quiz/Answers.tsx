import React, {PureComponent} from 'react';
interface AnswersSate {
    classNames: any;
    incorrectAnswers: [];
}
interface AnswersProps {
    answers?: any;
    showButton: () => void;
    isAnswered?: boolean;
    currentAnswer: string;
    handleAnswerList: (obj: any) => void;
}
class Answers extends PureComponent<AnswersProps, AnswersSate> {
    state: AnswersSate = {
        classNames: ['', '', '', ''],
        incorrectAnswers: [],
    }
    //     // let obj = { "listAnswer": [ {"id": 1, "choice": "A"},
    //     //                             {"id": 2, "choice": "B"},
    //     //                             {"id": 3, "choice": "C"},
    //     //                             {"id": 4, "choice": "A"},
    //     //                             {"id": 5, "choice": "B"},
    //     //                             {"id": 6, "choice": "A"}] }
    checkAnswer = (e: any) =>{        
        if(!this.props.isAnswered) {
            let elem = e.currentTarget;
            let answer = (elem.dataset.id);
            let updatedClassNames = this.state.classNames;
            let obj = {"id": this.props.currentAnswer, "choice": answer}
            console.log(this.props.currentAnswer)
            console.log(answer)
            updatedClassNames[answer] = 'selected';            
            this.setState({
                classNames: updatedClassNames,
            })
            this.props.handleAnswerList(obj);
            this.props.showButton();       
            setTimeout(() => {
                this.clearClasses();
            }, 1000);
        }
    }
    clearClasses(){
        this.setState({
            classNames: ['', '', '', '']
        })
        
    }
    render() {
        let { answers } = this.props;
        let { classNames } = this.state;
        
        // let transition = {
        //     transitionName: "example",
        //     transitionEnterTimeout: 500,
        //     transitionLeaveTimeout: 300
        // }
        
        return (
            <div id="answers">
                <ul>
                    <li onClick={this.checkAnswer} 
                        className={classNames['A']} data-id="A">
                    <span>A</span> 
                    <p>{answers[0]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={classNames['B']} data-id="B">
                    <span>B</span> 
                    <p>{answers[1]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={classNames['C']} data-id="C">
                    <span>C</span> 
                    <p>{answers[2]}</p></li>

                    <li onClick={this.checkAnswer} 
                        className={classNames['D']} data-id="D">
                    <span>D</span> 
                    <p>{answers[3]}</p></li>
                </ul>
            </div>
        );
    }
}

export default Answers