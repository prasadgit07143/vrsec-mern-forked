/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function CreateUser() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:3000/createUser", { name, email, age }).then((res) => {
            console.log(res)
            navigate('/')
        }).catch((e) => {
            console.log("An error occured", e);
        })
    }

    return (

        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb2">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="Name" id="Name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="email">email</label>
                        <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="Age">Age</label>
                        <input type="text" name="Age" id="Age" onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser