// import logo from './logo.svg';
import './App.css';
import Lifecycle from './Lifecycle';
import StateExample from './StateExample';
function App() {
  return (
    <div className="App">
      {/* header */}
      <h1>This is a Header</h1>

      {/* lifecycle component */}
      <Lifecycle />

      <hr />
      <StateExample />
      {/* footer */}
      <h1>This is Footer</h1>
    </div>
  );
}

export default App;
