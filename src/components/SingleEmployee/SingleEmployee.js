import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleEmployee = () => {
    let {id} = useParams();

    const [employeesDetails, setEmployessDetails] = useState([]);
    const [singleEmployee, setSingleEmployee] = useState({});

//এর কাজ হলো ডাটা লোড হওয়া 

    useEffect(()=> {
        fetch('/employeeDetails.json')
        .then(res => res.json())
        .then(data => setEmployessDetails(data.employee))
    }, [])

// কল হবে যখন আমারা সব ডাটা লোড হয়ে স্টেট এ সেট হবে। 

    useEffect(() => {
      const foundEmployee =  employeesDetails.find(employee => employee?.login?.id === id)
      setSingleEmployee(foundEmployee);
    }, [employeesDetails])

    return (
        <div>

                <Container className="mt-5">
                    <Row>
                        <Col md={4}>

                            <Card>
                                <Card.Img variant="top" src={singleEmployee?.picture?.thumbnail} />
                            </Card>

                        </Col>
                        <Col md={5}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{singleEmployee?.name}</Card.Title>
                                <Card.Text>
                                    <b>Email : {singleEmployee?.email}</b>
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>
                                </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default SingleEmployee;