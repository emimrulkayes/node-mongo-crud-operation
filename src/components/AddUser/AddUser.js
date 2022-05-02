import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddUser = () => {
    const handleAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const user = {name, email};

        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data);
            alert('users added successfully!!');
            event.target.reset();
        })
    }
    return (
        <Container>
            <Row>
                <Col xs lg={6} className="m-auto">
                    <h2 className='mt-5'>Please add new user.</h2>
                    <Form onSubmit={handleAddUser} className='mt-5 border border-info p-4 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" name='email' required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='py-2 px-5'> Add User </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddUser;