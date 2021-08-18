import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TestSample from "./page/TestSample";
import Test from "./page/Test";
import UserInfo from "./page/UserInfo";
import reducer from "./reducer/reducer";


const store = createStore(reducer);

function App() {

    return ( 
        <Provider store={store}>
        <BrowserRouter>
          <Switch>
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
      </Provider>

    );

}

export default App;