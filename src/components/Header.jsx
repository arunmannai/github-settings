import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src="./src/assets/cat_logo.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </a>
        <form className="d-flex">
          <input
            className="form-control me-2"
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
              <a className="nav-link">Pull requests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Issues</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Codespaces</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Marketplace</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Explore</a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand">
          <img
            src="./src/assets/Vector.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </a>
        <a className="navbar-brand">
          <img
            src="./src/assets/plus.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          <img
            src="./src/assets/downarrow.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </a>
        <a className="navbar-brand">
          <img
            src="./src/assets/Avatar.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />

          <img
            src="./src/assets/downarrow.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </a>
      </div>
    </nav>
  );
};
export default Header;
