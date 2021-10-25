import React from "react";
import ReactDom from "react-dom";

// Routing
import { BrowserRouter,  Route , Switch} from "react-router-dom";

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
              <Route exact path = "/" component={LoginForm}  />
              <Route exact path = "/home" component={EmployeeList}  />
            </EmployeeContextProvider>
          </div>
        </div>
      </div> 
    </div>
    </BrowserRouter>
  );
}

export default App;
