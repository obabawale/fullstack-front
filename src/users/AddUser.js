import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate = useNavigate();

    const [user, setUser] = useState(
        {
            name: "",
            username: "",
            email: ''
        }
    );

    const { name, username, email } = user;

    function onInputChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function onSubmit(e) {
        e.preventDefault();
        await axios.post("http://localhost:8080/users",  user );
        navigate("/");
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Register User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={(e) => onInputChange(e)} value={name} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Username" name="username" onChange={(e) => onInputChange(e)} value={username} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" name="email" onChange={(e) => onInputChange(e)} value={email} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button className="btn btn-danger mx-2">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
