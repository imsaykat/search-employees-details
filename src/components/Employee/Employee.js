import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [displayMatchedEmployess, setDisplayMatchedEmployess] = useState([])
    const history = useHistory();
    useEffect(() => {
        fetch("/employeeData.json")
        .then(res => res.json())
        .then(data => {

            setEmployees(data)
            setDisplayMatchedEmployess(data)})
    }, [])


    const handleClick = (id) => {
        history.push(`/employee/${id}`)
    }

    const handlerClickSearch = (event) => {
        const searchValue = event.target.value.toLowerCase();


        const matchedEmployee = employees.filter(employee => employee?.name.toLowerCase().includes(searchValue))
        setDisplayMatchedEmployess(matchedEmployee)


    }

    return (

   

    
             <Container className="my-5 mt-5 mb-5">
                      <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={handlerClickSearch}
                            />
                     </Form>
             <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Image</th>
                        <th>More_Info</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                   
                   {
                       displayMatchedEmployess.map(employee => (
                        <tr>
                            <td>{employee?.id}</td>
                            <td>{employee?.name}</td>
                            <td>{employee?.designation}</td>
                            <td> <a href={employee?.image} target="_blank" rel="noreferrer"> Clink and See The Image </a> </td>
                            <td><button className="btn btn-primary" onClick={() => handleClick(employee?.id)}>Details</button></td>
                    </tr>
                       ))
                   }
                   
                   
                   
                   
                   
                    
                
                    </tbody>
  </Table>
             </Container>
        
    );
};

export default Employee;