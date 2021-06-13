import { QuestionModel } from "./QuestionModel";

export interface AnswerResponse {
    status: string;
    incorrectAnswers: QuestionModel[];
  }
  