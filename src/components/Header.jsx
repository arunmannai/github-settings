import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand">
          <img
            src="./src/assets/cat_logo.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </Link>
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
              <Link className="nav-link">Pull requests</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Issues</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Codespaces</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Marketplace</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Explore</Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand">
         <img
            src="./src/assets/Vector.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
        </Link>
        <Link className="navbar-brand">
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
        </Link>
        <Link className="navbar-brand">
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
        </Link>
      </div>
    </nav>
  );
};
export default Header;
