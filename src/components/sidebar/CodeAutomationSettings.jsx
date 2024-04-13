import { NavLink } from "react-router-dom";

function CodeAutomationSettings() {
  return (
    <div className="sidebar">
      <div className="heading">Code, planning, and automation</div>
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <NavLink to="/repositories">
            <img
              src="/assets/rep.png"
              alt="rep"
              className="rounded-pill"
            />
            Repositories
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/codespaces">
            <img
              src="/assets/code.png"
              alt="code"
              className="rounded-pill"
            />
            Codespaces
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/packages">
            <img
              src="/assets/pack.png"
              alt="pack"
              className="rounded-pill"
            />
            Packages
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/copilot">
            <img
              src="/assets/cop.png"
              alt="cop"
              className="rounded-pill"
            />
            Copilot
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/pages">
            <img
              src="/assets/pag.png"
              alt="pag"
              className="rounded-pill"
            />
            Pages
          </NavLink>
        </li>
        <li className="list-group-item mb-1">
          <NavLink to="/saved-replies">
            <img
              src="/assets/arrow.png"
              alt="arrow"
              className="rounded-pill"
            />
            Saved replies
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default CodeAutomationSettings;
