"use client"
import axios from "axios";
import { useEffect, useState } from "react"

export default function Users() {
    let [users, setUsers] = useState([]);

    useEffect(() => {

        axios.get('/api/auth').then((resp) => {

            console.log(resp.data.users);

            setUsers(resp.data.users)

        })
    }, [])

    return <div className="container my-5">
        <table className="table table-bordered table-striped text-center">
            <thead className="table-dark">
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Company Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return <tr key={index}>

                            <td> {user.user_email}</td>
                            <td> {user.user_password}</td>
                            <td> {user.companyName}</td>
                            <td>
                                <button  className="btn btn-danger btn-sm"
                                onClick={async () => {

                                    let resp = await axios.delete(`/api/auth?userId=${user._id}`);

                                    if (resp.data.success) {

                                        setUsers(users.filter((myUser) => {
                                            return myUser._id != user._id
                                        })
                                        )

                                    } else {
                                        alert('failed')
                                    }
                                }}>Delete</button>
                            </td>
                            {/* delete logic myUser._id !== user_id means keep all users whose _id is not equal to the
                             user_id you clicked on (the user you want to delete). */}
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
}