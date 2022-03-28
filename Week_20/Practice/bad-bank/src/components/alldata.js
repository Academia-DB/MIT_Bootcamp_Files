import React from "react";
import {UserContext} from "./context.js";
import "./alldata.css";

export default function AllData(){
  const ctx = React.useContext(UserContext);
  const info = ctx.users.map(item => {
    return item;
  })

  return (
    <>
    <div className="title">ALL DATA</div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {ctx.users.map((info) =>
          <tr key={info.name}>
            <td>{info.name}</td>
            <td>{info.email}</td>
            <td>{info.password}</td>
            <td>{info.balance}</td>
          </tr>
        )}
      </tbody>
    </table>
    </>
  );
}
