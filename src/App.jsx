import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Result from './page/Result';
import ResultDetail from './page/ResultDetail';
import TestSample from './page/TestSample';
import Test from './page/Test';
import UserInfo from './page/UserInfo';
import './App.css';
import { AnswerProvider } from './answerContext';
import { ResultProvider } from './ResultContext';

function App() {
  return (
    <AnswerProvider>
      <ResultProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/result">
              <ResultDetail />
            </Route>
            <Route exact path="/fin">
              <Result />
            </Route>

            <Route exact path="/example">
              <TestSample />
            </Route>
            <Route exact path="/progress">
              <Test />
            </Route>
            <Route exact path="/">
              <UserInfo />
            </Route>
          </Switch>
        </BrowserRouter>
      </ResultProvider>
    </AnswerProvider>
  );
}

export default App;
