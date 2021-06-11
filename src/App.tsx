import { PureComponent, ReactNode } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Layout } from "antd";
import HomePage from "./pages/Home/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import HeaderComponent from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";

interface AppState {
  user?: string;
  showUser?: boolean;
}

export default class App extends PureComponent {
  state: AppState = {
    user: undefined,
  };
  render(): ReactNode {
    console.log(process.env.REACT_APP_API_ENDPOINT)
     let routes = (
      <Switch>
       <Route path="/" exact component={HomePage} />
       <Route path="/quiz" exact component={QuizPage} />  
      </Switch>
  );
    return (
      <Layout>
          <HeaderComponent />
          {routes}
          <FooterComponent />
      </Layout>
    );
  }
}

