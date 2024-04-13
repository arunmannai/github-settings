import { NavLink } from "react-router-dom";

function ArchivesSettings() {
  return (
    <div className="sidebar">
      <div className="heading">Archives</div>
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/security-log">
            <img
              src="./src/assets/log1.png"
              alt="log1"
              className="rounded-pill"
            />
            Security log
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/sponsorship-log">
            <img
              src="./src/assets/log2.png"
              alt="log2"
              className="rounded-pill"
            />
            Sponsorship log
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default ArchivesSettings;
