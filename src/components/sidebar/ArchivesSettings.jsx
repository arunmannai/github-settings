import { NavLink } from "react-router-dom";

function ArchivesSettings() {
  return (
    <div className="sidebar">
      Archives
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/security-log"><img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Security log
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/sponsorship-log"><img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Sponsorship log
       </NavLink> </li>
      </ul>
    </div>
  );
}

export default ArchivesSettings;
