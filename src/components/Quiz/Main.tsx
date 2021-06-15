import React, { Component, ReactNode } from 'react';
import { AnswerModel } from '../../services/QuestionsService/AnswerModel';
import { AnswerResponse } from '../../services/QuestionsService/AnswerResponse';
import { QuestionModel } from '../../services/QuestionsService/QuestionModel';
import { questionService } from '../../services/QuestionsService/QuestionService';
import Answers from './Answers';
import Popup from './Popup';
import Confetti from 'react-confetti';
import { Spin } from 'antd';
interface MainState {
    isLoaded: boolean;
    count: number;
    total: number;
    showButton: boolean;
    questionAnswered: boolean;
    score: number;
    displayPopup: string;
    questionsArr: QuestionModel[];
    question: string;
    answers: any;
    currentAnswer: string;
    listAnswer: AnswerModel[];
    isFinished: boolean;
    incorrectAnswers: AnswerResponse[];
}

class Main extends Component<{}, MainState> {
    arr: AnswerModel[] = []
    state: MainState = {
        isLoaded: false,
        count: 0,
        total: 0,
        showButton: false,
        questionAnswered: false,
        score: 0,
        displayPopup: 'flex',
        questionsArr: [],
        question: '',
        answers: ['', '', '', ''],
        currentAnswer: '',
        listAnswer: [],
        isFinished: false,
        incorrectAnswers: []
    }
    componentDidMount = () => {
        let { count } = this.state;
        questionService.getQuestions()
            .then(response => {
                const questions = response as QuestionModel[]
                this.setState({
                    questionsArr: questions,
                    total: questions.length,
                    isLoaded: true
                })
                this.insertData(count);
            }).catch(err => console.log(err))

    }

    insertData = (count: any) => {
        const { questionsArr } = this.state;
        this.setState({
            question: questionsArr[count].question,
            currentAnswer: questionsArr[count].id,
            answers: [questionsArr[count]?.choices['A'],
            questionsArr[count]?.choices['B'],
            questionsArr[count]?.choices['C'],
            questionsArr[count]?.choices['D']
            ],
            count: count + 1
        });
    }


    handleShowButton = () => {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    nextQuestion = () => {
        let { count, total } = this.state;
        if (count === total) {
            this.setState({
                displayPopup: 'flex',
                isFinished: true
            });
            let obj = { "listAnswer": this.state.listAnswer }
            questionService.postAnswer(obj).then(rsp => {
                if (rsp.status === 'P') {
                    this.setState({
                        displayPopup: 'flex',
                        isFinished: true,
                        score: this.state.total,
                    })
                } else {
                    this.setState({
                        displayPopup: 'flex',
                        isFinished: true,
                        score: this.state.total - (rsp.incorrectAnswers).length,
                    })
                }
            })
        } else {
            this.insertData(count);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }
    }

    handleStartQuiz = () => {
        this.setState({
            displayPopup: 'none'
        });
    }


    handleAnswerList = (obj: any) => {
        this.arr.push(obj)
        this.setState({ listAnswer: this.arr })
        console.log(this.arr)
    }

    render(): ReactNode {
        return (
            <>
                {
                    !this.state.isLoaded ? <Spin size="large" className='spin-loading' /> :
                        <div className="container">
                            {
                                this.state.isFinished ? <Confetti style={{ width: '100%', height: '100%' }} /> : null
                            }
                            <Popup style={{ display: this.state.displayPopup }}
                                score={this.state.score}
                                total={this.state.total}
                                isFinished={this.state.isFinished}
                                startQuiz={this.handleStartQuiz}
                            />

                            <div className="row">
                                <div className="col-lg-12 col-md-10">
                                    <div id="question">
                                        <h4 className="bg-light">Question {this.state.count}/{this.state.total}</h4>
                                        <p>{this.state.question}</p>
                                    </div>
                                    <Answers
                                        answers={this.state.answers}
                                        currentAnswer={this.state.currentAnswer}
                                        showButton={this.handleShowButton}
                                        isAnswered={this.state.questionAnswered}
                                        handleAnswerList={this.handleAnswerList}
                                    />
                                    <div id="submit">
                                        {this.state.showButton ?
                                            <button className="fancy-btn"
                                                onClick={this.nextQuestion} >
                                                {this.state.count === this.state.total ? 'Finish quiz' : 'Next question'}
                                            </button> : <span></span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                 }
            </>
        )
    }
}
export default Main;