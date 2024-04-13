import { NavLink } from "react-router-dom";

function PublicProfileSettings() {
  return (
    <div className="sidebar">
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/public-profile">
            <img src="/assets/pub.png" className="rounded-pill" />
            Public profile
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/account">
            <img src="/assets/sett.png" className="rounded-pill" />
            Account
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/appearance">
            <img src="/assets/Appe.png" className="rounded-pill" />
            Appearance
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/accessibility">
            <img src="/assets/access.png" className="rounded-pill" />
            Accessibility
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/notifications">
            <img src="/assets/bell.png" className="rounded-pill" />
            Notifications
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default PublicProfileSettings;
