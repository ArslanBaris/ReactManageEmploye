import EmployeeList from "./components/EmployeeList";

// Context
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <div classNameName="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">            
            <EmployeeContextProvider>
              <EmployeeList />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
