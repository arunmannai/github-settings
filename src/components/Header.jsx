import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img
            src="./src/assets/cat_logo.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </NavLink>

        <form className="d-flex">
          <input
            className="form-control me-2 bg-dark text-light searchbox"
            type="text"
            placeholder="Search or jumb to.."
          />
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/pull-requests" className="nav-link">
                Pull requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/isues" className="nav-link">
                Issues
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/codespaces" className="nav-link">
                Codespaces
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/marketplace" className="nav-link">
                Marketplace
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/explore" className="nav-link">
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/notifications" className="navbar-brand me-2">
          <img
            src="./src/assets/Vector.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </NavLink>
        <NavLink>
          <img
            src="./src/assets/plus.png"
            alt="CompanyLogo"
            className="rounded-pill px-1 ms-1"
          />
          <img
            src="./src/assets/downarrow.png"
            alt="CompanyLogo"
            className="rounded-pill px-1 me-1"
          />
        </NavLink>
        <NavLink>
          <img
            src="./src/assets/Avatar.png"
            alt="CompanyLogo"
            className="rounded-pill px-1 ms-1"
          />
          <img
            src="./src/assets/downarrow.png"
            alt="CompanyLogo"
            className="rounded-pill px-1 me-1"
          />
        </NavLink>
      </div>
    </nav>
  );
};
export default Header;
