// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [leaveStatus, setLeaveStatus] = useState("")
  return (

    <>
      <div className="container pt-5">
    <h2 className='text-center mb-3'>Employee Calendar</h2>
        <div className="row">
          <div className="col-md-4">
            <h1>Parent Component</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => setLeaveStatus('approved')}>Approve Leave</button>
            <button className="btn btn-danger" onClick={() => setLeaveStatus('rejected')}>Reject Leave</button>
          </div>
          <div className="col">
            <h1>Child Component</h1> <hr />
            <EmployeeLeave leaveStatus={leaveStatus} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




function EmployeeLeave({ leaveStatus }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SN</th>
                <th>Leave Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Number of Days</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Vacation</td>
                <td>10-01-2024</td>
                <td>14-01-2024</td>
                <td>5</td>
                <td>{
                  leaveStatus && ((leaveStatus == 'rejected') ? (<>
                    <div className="badge bg-danger">Rejected</div>
                  </>) : (<>
                    <div className="badge bg-success">Approved</div>
                  </>)) || (<>
                    <div className="badge bg-info">Waiting for Approval</div>
                  </>)
                }
                </td>
              </tr><tr>
                <td>2</td>
                <td>Medical</td>
                <td>10-01-2024</td>
                <td>14-01-2024</td>
                <td>5</td>
                <td>{
                  leaveStatus && ((leaveStatus == 'rejected') ? (<>
                    <div className="badge bg-danger">Rejected</div>
                  </>) : (<>
                    <div className="badge bg-success">Approved</div>
                  </>)) || (<>
                    <div className="badge bg-info">Waiting for Approval</div>
                  </>)
                }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}


