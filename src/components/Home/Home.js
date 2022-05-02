import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import AddUser from '../AddUser/AddUser';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

    const hanleUserDelete = id => {
        const proceed = window.confirm('delete?');
        if(proceed){
            console.log('delete', id)
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, { method: 'delete' })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    console.log("deleted");
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })

        }
    }

    return (
        <Container>
            <Row>
                <h2>Available User: {users.length} </h2>
                <ul>
                    {
                        users.map(user => <li
                            key={user._id}
                            user = {user}
                            > 
                                Name: {user.name}
                                <button onClick={() => hanleUserDelete(user._id)} type="btn" className='ms-4 mb-2'>delete</button>
                            </li>
                        )
                    }
                </ul>
            </Row>
        </Container>
    );
};

export default Home;