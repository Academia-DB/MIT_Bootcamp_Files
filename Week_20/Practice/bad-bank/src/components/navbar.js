import React from "react";
import "./navbar.css";

export default function NavBar(){
  return(
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/createaccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
    </>
  );
}


// import React, {Component} from "react";
// import {NavLink} from "react-router-dom";
// import "./navbar.css";

// export default class NavBar extends Component{
//   render() {
//     return(
//         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//           <a className="navbar-brand">BadBank</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <NavLink exact activeClassName="current" activeStyle={{color:'yellow'}} to="/">Home</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink exact activeClassName="current" activeStyle={{color:'yellow'}} to="/createaccount">Create Account</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink exact activeClassName="current" activeStyle={{color:'yellow'}} to="/deposit">Deposit</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink exact activeClassName="current" activeStyle={{color:'yellow'}} to="/withdraw">Withdraw</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink exact activeClassName="current" activeStyle={{color:'yellow'}} to="/alldata">AllData</NavLink>
//               </li>          
//             </ul>
//           </div>
//         </nav>
//     );
//   }
// }