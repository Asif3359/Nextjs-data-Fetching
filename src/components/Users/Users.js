'use client'
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    return (
        <div className='container mx-auto'>
            <h2> User Length: {users.length}</h2>

            <div className='grid grid-cols-2 gap-10 mx-20'>
                {
                    users.map((user) => <div key={user.id}>
                        <div className="card w-full bg-base-100 border">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;