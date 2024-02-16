import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function UserRegistration() {
    const [form, setForm] = useState({
        name: '', email: '', password: '',
        dob: ''
    })

    function setInputValue(e) {
        const { name, value } = e.target;

        // let inputName = name;
        setForm((oldValues) => ({ ...oldValues, [name]: value }))
    }
    return (
        <>
            <div className="container pt-4">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="card bg-dark text-light">
                            <div className="card-body px-5">
                                <h4 className="text-center my-4">User Profile</h4>
                                <hr />
                                <form action="#" className="needs-validation" noValidate>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="name" className="form-label">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    required
                                                    value={form.name}
                                                    name='name'
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout your name
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="pwd" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    id="pwd"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required
                                                    name='password'
                                                    value={form.password}
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout your Password
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="dob" className="form-label">Date Of Birth</label>
                                                <input
                                                    type="date"
                                                    id="dob"
                                                    className="form-control"
                                                    placeholder="Date of Birth"
                                                    required
                                                    name='dob'
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout your Password
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <p>Gender</p>
                                                <div className="d-flex">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"

                                                            id="female"
                                                            required
                                                            name='gender'
                                                            onChange={setInputValue}
                                                            value='female'
                                                        />
                                                        <label className="form-check-label" htmlFor="female">
                                                            Female
                                                        </label>
                                                    </div>
                                                    &nbsp; &nbsp; &nbsp;
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="male"
                                                            onChange={setInputValue}
                                                            value='male'
                                                            required

                                                        />
                                                        <label className="form-check-label" htmlFor="male">
                                                            Male
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="mobile" className="form-label">Mobile</label>
                                                <input
                                                    type="number"
                                                    id="mobile"
                                                    className="form-control"
                                                    placeholder="Mobile"
                                                    required
                                                    name='mobile'
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout your Mobile
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    required
                                                    name='email'
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout your Email
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="pincode" className="form-label">PinCode</label>
                                                <input
                                                    type="text"
                                                    id="pincode"
                                                    className="form-control"
                                                    placeholder="Pincode"
                                                    required
                                                    name='pincode'
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout this field
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="city" className="form-label">City</label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    className="form-control"
                                                    placeholder="City"
                                                    required
                                                    name='city'
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout this field
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="state" className="form-label">State</label>
                                                <input
                                                    type="text"
                                                    id="state"
                                                    className="form-control"
                                                    placeholder="State"
                                                    required
                                                    name='state'
                                                    onChange={setInputValue}
                                                />
                                                <div className="invalid-feedback">
                                                    Please fillout thi field
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="country" className="form-label">Country</label>
                                                <select
                                                    className="form-select"
                                                    id="country"
                                                    aria-label="Select Country"
                                                    required
                                                    name='country'
                                                    onChange={setInputValue}
                                                >
                                                    <option >Select Country</option>
                                                    <option value="1">Country Name</option>
                                                    <option value="2">Country Name</option>
                                                    <option value="3">Country Name</option>
                                                </select>
                                                <div className="invalid-feedback">Please select country</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center my-4">
                                        <button className="btn btn-success my-3 w-50">Submit</button>

                                        <p>
                                            Do you have an account? click
                                            {/* <a href="user-login.html">here</a> */}
                                            <Link to="/user-login">here</Link>
                                             to login
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 p-5 bg-dark text-light rounded">
                        <pre><h6>{JSON.stringify(form, null, 2)}</h6></pre>
                    </div>

                </div>
            </div>


        </>
    )
}

export default UserRegistration