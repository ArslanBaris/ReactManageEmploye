import { useContext, useState, useEffect } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';

import Auth from '../Auth';

// Components
import Employee from './Employee';
import AddForm from './AddForm';

// Context
import { EmployeeContext } from '../contexts/EmployeeContext';


const EmployeeList = (props) => {

    const {employees} = useContext(EmployeeContext)

    const [showAlert, setShowAlert] = useState(false);
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    //const handleShowAlert = () => setShowAlert(true);

    const handleShowAlert = () => {
      setShowAlert(true);
      setTimeout(()=> {
          setShowAlert(false);
      }, 2000);
  };

    useEffect(() => {
       handleClose();

       return() => {
         handleShowAlert();
       }
    }, [employees])

 

    return (
        <>

        <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Employees</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <Button
                   onClick={()=>{
                     Auth.logout(()=>{
                      props.history.push("/");
                     })
                   }}
                  >
                    <i class="material-icons logout">&#xe9ba;</i>{" "}
                    <span>Logout</span>
                  </Button>

                  <Button
                   onClick={handleShow}
                    className="btn btn-success text-white"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Employee</span>
                  </Button>
                </div>
              </div>
            </div>

      <Alert show={showAlert} variant="success">
        Employee List successfully updated!.
      </Alert>

        <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {
                    employees.sort((a,b) => (a.name < b.name ? -1 : 1)).map((employee) =>(
                        <tr key={employee.id}>
                            <Employee employee={employee} />
                        </tr>
                    ))
                }
        </tbody>
    </table>

    <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title>
                    Add Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Modal
                </Button>
            </Modal.Footer>
        </Modal>     
    </>
    )
}

export default EmployeeList;

//.sort((a,b) => a.name.localeCompare(b.name))