import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-content">
          <Link to="/default" className="logo">
            <img src="./src/assets/cat_logo.jpg" alt="CompanyLogo" />
          </Link>
          <div className="header-right">
            <i className="fa fa-search"></i>
            <input
              type="text"
              className="form-control form-input"
              placeholder="Search anything..."
            />
            <span className="left-pan">
              <i className="fa fa-microphone"></i>
            </span>
            <Link to="/contact">Pull requests</Link>
            <Link to="/issues">Issues</Link>
            <Link to="/codespaces">Codespaces</Link>
            <Link to="/Marketplace">Marketplace</Link>
            <Link to="/explore">Explore</Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to="/default" className="logo">
          <img src="./src/assets/cat_logo.jpg" alt="CompanyLogo" />
        </Link>
        <span>© 2023 GitHub, Inc.</span>
        <Link to="/terms">Terms</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/security">Security</Link>
        <Link to="/status">Status</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/contact_gitHub">Contact GitHub</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/api">API</Link>
        <Link to="/training">Training</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Header;
