import { NavLink } from "react-router-dom";

function SecuritySettings() {
  return (
    <div className="sidebar">
      Security
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
        <NavLink to="/security">
          <img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Code security and analysis
       </NavLink> </li>
      </ul>
    </div>
  );
}

export default SecuritySettings;
