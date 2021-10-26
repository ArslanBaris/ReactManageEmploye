import React from "react";
import ReactDom from "react-dom";

// Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./Auth";
import ProtectedRoute from "./components/Protected.route";

// Components
import EmployeeList from "./components/EmployeeList";
import LoginForm from "./components/LoginForm";

// Context
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <BrowserRouter>
      
        <div classNameName="App">
          <div className="container-xl">
            <div className="table-responsive">
              <div className="table-wrapper">
                <EmployeeContextProvider>
                <Switch>
                  <Route exact path="/" component={LoginForm} />
                  <ProtectedRoute exact path="/home" component={EmployeeList} />
                  <Route path="*" component={() => "404 NOT FOUND"} />
</Switch>
                </EmployeeContextProvider>
              </div>
            </div>
          </div>
        </div>
      
    </BrowserRouter>
  );
}

export default App;
