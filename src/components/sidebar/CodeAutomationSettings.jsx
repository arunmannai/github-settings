import { NavLink } from "react-router-dom";

function CodeAutomationSettings() {
  return (
    <div className="sidebar">
      <div className="heading">Code, planning, and automation</div>
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/repositories"><img
            src="./src/assets/pub.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Repositories
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/codespaces"><img
            src="./src/assets/sett.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Codespaces
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/packages"><img
            src="./src/assets/Appe.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Packages
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/copilot"><img
            src="./src/assets/access.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Copilot
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/pages"><img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Pages
       </NavLink> </li>
        <li className="list-group-item mb-1">
          <NavLink to="/saved-replies"><img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Saved replies
       </NavLink> </li>
      </ul>
      <hr />
    </div>
  );
}

export default CodeAutomationSettings;
