import { Form, Button } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

import Auth from "./../Auth";

// Context
import { EmployeeContext } from "../contexts/EmployeeContext";

const LoginForm = (props) => {
  const { setForLogin } = useContext(EmployeeContext);
  const { employees } = useContext(EmployeeContext);

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };



  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { userName, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    employees.map((employee) => {
      if (
        employee.user.userName === userName &&
        employee.user.password === password
      ) {
        Auth.login(() => {
          setForLogin(userName, password);
          props.history.push("/home");
        });
      }else
      setError("Username or password don't match.")
    });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{ margin: "auto", width: "50%", marginTop: "10%" }}
    >
      <div style={{ borderColor: "black" }}>
        <h2 style={{ textAlign: "center", padding: "20px" }}>Login</h2>
      </div>

      <Alert show={showAlert} variant="danger">
        {error}
      </Alert>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="User Name *"
          name="userName"
          value={userName}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Password *"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Button variant="success" type="submit" block onClick={(error!=="") ? handleShowAlert : -1} >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
