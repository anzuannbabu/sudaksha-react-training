import React from 'react'
import { useForm } from 'react-hook-form';//TODO: study more on this package, it deals with forms
import { Link } from 'react-router-dom';

function UserLogin() {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => alert(values.username + " " + values.password);

    return (
        <>
            <div className="container pt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-dark text-light">
                            <div className="card-body px-5">
                                <h4 className="text-center my-4">Login As User</h4>
                                <hr />
                                <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="name" className="form-label">User Id</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    className="form-control"
                                                    placeholder="User Id"
                                                    {...register('username', { required: 'Username is required' })}
                                                />
                                                {/* {
                                                    errors.username && (
                                                        <div className="text-danger" >
                                                            {errors.username.message}
                                                        </div>
                                                    )
                                                } */}

                                                <ErrorMessage inputError={errors.username} />

                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="pwd" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    id="pwd"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    {...register('password', { required: 'Password is required' })}
                                                />
                                                {/* {
                                                    errors.password && (
                                                        <div className="text-danger" >
                                                            {errors.password.message}
                                                        </div>
                                                    )
                                                } */}

                                                <ErrorMessage inputError={errors.password} />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="text-center my-4">
                                        <button className="btn btn-success my-3 w-50">Login</button>

                                        <p>You don't have an account? click 
                                            {/* <a href="user-registration.html">here</a> */}
                                            <Link to="/user-registration">here</Link>
                                             to register</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin;


const ErrorMessage = ({ inputError }) => {
    return <>
        {
            inputError && (
                <div className="text-danger" >
                    {inputError.message}
                </div>
            )
        }
    </>
}