import React, { ReactNode } from "react";
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage"
import Layout from "./components/hoc/Layout/Layout";
import RequirePage from "./pages/RequirePage/RequirePage";
import PrivateRoute from "./components/hoc/PrivateRoute/PrivateRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
export default class App extends React.Component {
  render(): ReactNode {
     let routes = (
      <Switch>
       <Route path={"/"} exact component={HomePage} />
       <PrivateRoute path="/quiz" exact component={QuizPage} />  
       <Route path="/require" exact component={RequirePage} />  
       <Route component={NotFoundPage} />
      </Switch>
  );
    return (
      <Layout>
         {routes}
      </Layout>
    );
  }
}

