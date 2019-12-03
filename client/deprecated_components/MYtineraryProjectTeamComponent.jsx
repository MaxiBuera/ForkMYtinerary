import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleShowComponent from "./ToggleShowComponent";

const MYtineraryProjectTeamComponent = ({ data, show, btnCerrar }) => {
  return (
    <div>
      <div className="col-lg-12 p-2 d-flex justify-content-center tab">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.team.map(users => (
                <tr key={users.id}>
                  <td>{users.first_name}</td>
                  <td>{users.last_name}</td>
                  <td>{users.company}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button onClick={btnCerrar}>Press Me</button>
      <div>{show && <ToggleShowComponent />}</div>
    </div>
  );
};

export default MYtineraryProjectTeamComponent;
