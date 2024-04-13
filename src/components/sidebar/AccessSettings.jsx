import { NavLink } from "react-router-dom";

function AccessSettings() {
  return (
    <div className="sidebar">
      <div className="heading">Access</div>
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/billing">
            <img
              src="/assets/bill.png"
              alt="bill"
              className="rounded-pill"
            />
            Billing and plans
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/emails">
            <img
              src="/assets/mail.png"
              alt="mail"
              className="rounded-pill"
            />
            Emails
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/authentication">
            <img
              src="/assets/auth.png"
              alt="auth"
              className="rounded-pill"
            />
            Password and authentication
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/sessions">
            <img
              src="/assets/hotspot.png"
              alt="sess"
              className="rounded-pill"
            />
            Sessions
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/ssh-gpg-keys">
            <img
              src="/assets/key.png"
              alt="key"
              className="rounded-pill"
            />
            SSH and GPG keys
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/organizations">
            <img
              src="/assets/org.png"
              alt="org"
              className="rounded-pill"
            />
            Organizations
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/moderation">
            <img
              src="/assets/mode.png"
              alt="mode"
              className="rounded-pill"
            />
            Moderation
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default AccessSettings;
