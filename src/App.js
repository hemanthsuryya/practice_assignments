// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { Login, Register, Dashboard } from './components/login'
import Login from './components/login/login';
import Dashboard from './components/login/dashboard';
import Register from './components/login/register';
import Logout from './components/login/Logout';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Dashboard</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        {/* <Link to='/logout'>Logout</Link> */}
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogginActive: true,
//     }
//   }

//   render() {
//     const { isLogginActive } = this.state;
//     // const current = isLogginActive ? "Register" : "Login"
//     return(
//       <div className='App'>
//         {isLogginActive && <Login containerRef={(ref) => this.current = ref}/>}
//         {!isLogginActive && <Register containerRef={(ref) => this.current = ref}/>}
//       {/* <swapBtn 
//         current={current}
//         containerRef={ref=> (this.swap = ref)}
//         onClick={this.changeState.bind(this)}
//       />         */}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
  
// )

export default App;
