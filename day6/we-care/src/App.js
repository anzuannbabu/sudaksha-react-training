import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import UserRegistration from './pages/UserRegistration';
import UserLogin from './pages/UserLogin';
import LoadingButton from './components/LoadingButton';
import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Counter } from './store/features/counter/Counter';

function App() {
  const [loading, SetLoading] = useState(false)
  return (
    <>
      <Navbar />
      {/* content */}

      {/* <Counter/> */}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-registration" element={<UserRegistration />} />
      </Routes>
      {/* <LandingPage /> */}
      {/* <UserRegistration /> */}
      {/* <UserLogin /> */}
      {/*   ./content  */}

      {/* <div className="p-5">
        <LoadingButton className="btn btn-primary rounded-btn w-25" type="button" loading={loading} onClick={() => {
          SetLoading(true)

          setTimeout(() => {
            SetLoading(false)
          }, 3000)
        }}>Save Changes</LoadingButton>
      </div> */}
    </>
  );
}

export default App;
