import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Tabulator } from 'tabulator-tables';

function UserList(props) {
    const [users, setUsers] = useState([])
    const [reload, setReload] = useState([])
    
    useEffect(() => {


        return () => {
            //call the api
            axios.get("http://localhost:3005/users").then(res => {
                console.log(res)
                setUsers(res.data)
            })
        }
    }, [props.reload, reload])

    function handleDelete(user) {
        axios.delete('http://localhost:3005/users/' + user.id).then(res => {
            setReload(res.data + (new Date()))
        })
    }


    const mappedUsers = users.map((user, index) => (
        <tr key={user?.id}>
            <td>{(index + 1)}</td>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td >
                <div className='btn-group'>
                    <button className='btn btn-primary btn-sm' onClick={() => props.setSelectedUser(user)}>Edit</button>
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(user)}>Delete</button>
                </div>
            </td>
        </tr>
    ))

    var table = new Tabulator("#example-table", {
        height: "311px",
        columns: [
            { title: "Name", field: "name" },
            { title: "Progress", field: "progress", sorter: "number" },
            { title: "Gender", field: "gender" },
            { title: "Rating", field: "rating" },
            { title: "Favourite Color", field: "col" },
            { title: "Date Of Birth", field: "dob", hozAlign: "center" },
        ],
    });

    return (
        <>
           <div className="d-flex justify-content-between my-3">
           <h6>Registered Users</h6> <hr />
           <input type="text" className="form-control w-25" placeholder='Search' />
           </div>
            {/* <div id="example-table"></div> */}
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sn</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    <tr className='d-none'>
                        <th>
                            <input type="text" className='form-control' placeholder='search..' />
                        </th>
                        <th>
                            <input type="text" className='form-control' placeholder='search..' />
                        </th>
                        <th>
                            <input type="text" className='form-control' placeholder='search..' />
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length > 0 ? (mappedUsers) : (
                            <>
                                <tr>
                                    <th colSpan="10" className='text-center text-danger'>No Data Found</th>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default UserList