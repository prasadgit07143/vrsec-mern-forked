/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// import React from 'react

import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Users() {
    const [user, SetUser] = useState([{
        name: ""
    }]);
    useEffect(() => {
        axios.get('http://localhost:3000').then((res) => {
            SetUser(res.data);

        }).catch((e) => {
            console.log("an Error occured")
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3000/deleteUser/" + id,).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })

    }
    return (
        <div className="parent">
            <Link to="/create" className="btn btn-success">Create</Link>
            <div className="child">
                <table className="table">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user) => {

                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Users