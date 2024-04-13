import { NavLink } from "react-router-dom";

function IntegrationSettings() {
  return (
    <div className="sidebar">
      <div className="heading">Integrations</div>
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/applications">
            <img
              src="/assets/app.png"
              alt="app"
              className="rounded-pill"
            />
            Applications
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/scheduled-reminders">
            <img
              src="/assets/clock.png"
              alt="clock"
              className="rounded-pill"
            />
            Scheduled reminders
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default IntegrationSettings;
