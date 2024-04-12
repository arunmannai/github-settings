import { NavLink } from "react-router-dom";

function AccessSettings() {
  return (
    <div className="sidebar">
      Access
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/billing"><img
            src="./src/assets/pub.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Billing and plans
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/emails"><img
            src="./src/assets/sett.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Emails
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/authentication"><img
            src="./src/assets/Appe.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Password and authentication
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/sessions"><img
            src="./src/assets/access.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Sessions
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/ssh-gpg-keys"><img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          SSH and GPG keys
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/organizations"><img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Organizations
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/moderation"><img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Moderation
       </NavLink> </li>
      </ul>
    </div>
  );
}

export default AccessSettings;
