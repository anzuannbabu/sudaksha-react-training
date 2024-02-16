// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserList1 from './components/UserList1';
import CDataTable from './components/CDataTable'

function App() {
  const [reload, setReload] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <>
      <div className="container mt-1">
        <nav className='nav navbar bg-dark mb-4'>
          <div className="container">
            <div className="navbar-brand text-white">Search & Sorting App</div>
          </div>
        </nav>

        {/* sidebar and content section */}
        <div className="row">
          <div className="col-md-4">
            <UserForm setReload={setReload} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
          </div>
          <div className="col-md-8">
            {/* <UserList reload={reload} setSelectedUser={setSelectedUser} /> */}
            {/* <UserList1 reload={reload} setSelectedUser={setSelectedUser} /> */}

            <CDataTable reload={reload} setSelectedUser={setSelectedUser}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
