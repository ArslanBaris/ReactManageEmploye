import { Form, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';

import Auth from './../Auth'

// Context
import { EmployeeContext } from '../contexts/EmployeeContext';

const LoginForm = (props) => {    

    const { login } = useContext(EmployeeContext);
    const {employees} = useContext(EmployeeContext)
    const [user, setUser] = useState({
        userName:"", password:""
    })

    const {userName, password } = user;
    
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        login(userName,password)
        Auth.login(() => {
            props.history.push("/home")
        })
        console.log(employees)
        
    }

    return (
        <Form onSubmit={handleSubmit} style={{margin:"auto",width:"50%", marginTop:"10%"}}>
            <div style={{borderColor:"black"}}>
            <h2 style={{textAlign:"center",padding:"20px"}}>Login</h2>
            </div>

            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="User Name *"
                    name="userName"
                    value={userName}
                    onChange={e => onInputChange(e)}
                    required 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="Password *"
                    name="password"
                    value={password}
                    onChange={e => onInputChange(e)}
                    required 
                />
            </Form.Group>
           

            <Button variant="success" type="submit" block>
                Login
            </Button>
        </Form>
    )
}

export default LoginForm;