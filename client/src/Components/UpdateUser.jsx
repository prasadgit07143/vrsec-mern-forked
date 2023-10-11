/* eslint-disable no-unused-vars */
// import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
function UpdateUser() {
    const { id } = useParams()
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/getuser/' + id).then((res) => {
            console.log("res", res)
            setName(res.data.name)
            setEmail(res.data.email)
            setAge(res.data.age)

        }).catch((e) => {
            console.log("an Error occured", e)
        })
    }, [])
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("http://127.0.0.1:3000/updateUser/" + id, { name, email, age }).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((e) => {
            console.log("An error occured", e);
        })

    }
    return (
        <div>
            <div>
                <form onSubmit={handleUpdate}>
                    <div className="mb2">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="Name" id="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="email">email</label>
                        <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="Age">Age</label>
                        <input type="text" name="Age" id="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser