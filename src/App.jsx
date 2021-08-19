import { Switch, Route, BrowserRouter } from "react-router-dom";
import Result from "./page/Result";
import TestFin from "./page/TestFin";
import TestSample from "./page/TestSample";
import Test from "./page/Test";
import UserInfo from "./page/UserInfo";


function App() {

    return ( 
        <BrowserRouter>
          <Switch>
            <Route path="/result">
              <Result/>
            </Route>
            <Route path="/fin">
              <TestFin/>
            </Route>
            <Route path="/example">
              <TestSample />
            </Route>
            <Route path="/progress">
              <Test/>
            </Route>
            <Route path="/">
              <UserInfo />
            </Route>
          </Switch>
        </BrowserRouter>


    );

}

export default App;