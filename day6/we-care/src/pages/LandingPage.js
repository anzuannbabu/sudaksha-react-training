import React from 'react'
import {Link} from 'react-router-dom'
import ServiceList from './ServiceList'

function LandingPage() {
    return (
        <>
            <div className="container pt-4">

                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">
                        <h1 className="text-center">We are at the heart of appropriate care</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card bg-dark">
                            <div className="card-body text-center">

                                <img className="rounded w-100" src="https://master-sprints-new.s3.eu-central-1.amazonaws.com/testimonial/16999896306553c87e65fef-1.jpg" alt="" />

                                <button className="btn btn-info w-100 my-4">Login as Coach</button>
                                <a href="couch-registration.html" className="btn btn-info w-100">Join as Coach</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-dark">
                            <div className="card-body text-center">
                                <img className="rounded w-100" src="https://master-sprints-new.s3.eu-central-1.amazonaws.com/testimonial/16999896306553c87e65fef-1.jpg" alt="" />
                                {/* <a href="user-login.html" className="btn btn-info w-100 my-4">Login as User</a> */}

                                <Link to="/user-login"><button className="btn btn-info w-100 my-4">Login as User</button></Link> 
                                <Link to="/user-registration"><button className="btn btn-info w-100 ">Join as User</button></Link> 

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceList/>
        </>
    )
}

export default LandingPage