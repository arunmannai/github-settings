import { NavLink } from "react-router-dom";

function DevSettings() {
  return (
    <div className="sidebar">
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/dev-settings">
            <img
              src="/assets/arr.png"
              alt="arr"
              className="rounded-pill"
            />
            Developer settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DevSettings;
