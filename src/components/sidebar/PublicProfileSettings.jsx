import { NavLink } from "react-router-dom";

function PublicProfileSettings() {
  return (
    <div className="sidebar">
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/public-profile">
            <img
              src="./src/assets/pub.png"
              alt="CompanyLogo"
              className="rounded-pill"
            />
            Public profile
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/account">
            <img
              src="./src/assets/sett.png"
              alt="CompanyLogo"
              className="rounded-pill"
            />
            Account
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/appearance">
            <img
              src="./src/assets/Appe.png"
              alt="CompanyLogo"
              className="rounded-pill"
            />
            Appearance
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/accessibility">
            <img
              src="./src/assets/access.png"
              alt="CompanyLogo"
              className="rounded-pill"
            />
            Accessibility
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/notifications">
            <img
              src="./src/assets/bell.png"
              alt="CompanyLogo"
              className="rounded-pill"
            />
            Notifications
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default PublicProfileSettings;
