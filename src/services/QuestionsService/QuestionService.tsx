import axios, { AxiosInstance } from "axios";
import { QuestionModel } from "./QuestionModel";
class QuestionService {
    private readonly restClient: AxiosInstance;
    constructor() {
    this.restClient = axios.create({
      baseURL: "https://react14-contest-easy-quiz-app.herokuapp.com/quiz",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    
  }
    public readonly getQuestions = (): Promise<QuestionModel[]> =>
    this.restClient.get<{ result: QuestionModel[] }>(``).then(resp => resp.data.result);
    public readonly getOne = (id: string): Promise<QuestionModel> => this.restClient.get<QuestionModel>(id).then(resp => resp.data);
    public readonly postAnswer = (obj: Object) => 
        this.restClient.post(`/answer`, obj)
        .then((rs) => {
            return rs.data;
          }, err => {
            return Promise.reject(err)
          });
}

export const questionService = new QuestionService();