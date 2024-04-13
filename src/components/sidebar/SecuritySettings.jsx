import { NavLink } from "react-router-dom";

function SecuritySettings() {
  return (
    <div className="sidebar">
      <div className="heading">Security</div>
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/security">
            <img
              src="./src/assets/sec.png"
              alt="sec"
              className="rounded-pill"
            />
            Code security and analysis
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default SecuritySettings;
