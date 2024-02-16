import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';


function UserForm(props) {
    const [crud, setCrud] = useState('create')
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        //call api to save data and hit setReload
        if (crud === 'create') {
            //create user details here
            axios.post('http://localhost:3005/users', data).then(res => {
                props.setReload(res.data)

                //clear the form
                reset()
                setCrud('create')
            })
        } else {
            //update user details here
            axios.put('http://localhost:3005/users/' + props.selectedUser.id, data).then(res => {
                props.setReload(res.data)

                //clear the form
                reset()
                setCrud('create')
            })
        }
    }

    useEffect(() => {
        if (props.selectedUser) {
            setCrud('update')

            //set the form values
            setValue("name", props.selectedUser.name)
            setValue("email", props.selectedUser.email)
        }
        console.log(props.selectedUser,"haha")
        return () => {
        }
    }, [props.selectedUser])


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h6>User Registration Form</h6>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' {...register("name", { required: 'This field is required' })} className="form-control" />
                            {
                                errors.name && (<>
                                    <p className='text-danger mt-1'>{errors.name.message}</p>
                                </>)
                            }
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' {...register("email", { required: 'Please enter a valid Email' })} className="form-control" />
                            {
                                errors.email && (<>
                                    <p className='text-danger mt-1'>{errors.email.message}</p>
                                </>)
                            }
                        </div>
                        <hr />
                        <div className="d-flex justify-content-center">
                            <button className='btn btn-primary btn-rounded w-50'>
                                {crud && (crud === 'create' ? 'Save' : 'Update')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserForm



function InputError(err) {
    return (
        <>
            {
                err && (<>
                    <p className='text-danger mt-1'>{err.message}</p>
                </>)
            }
        </>
    )
}

