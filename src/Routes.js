import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function Routes(params) {
    return (
        <BrowserRouter>
            <>
                <Switch>
                  <Route>Hi</Route>
                </Switch>
            </>
        </BrowserRouter>
    )
}

