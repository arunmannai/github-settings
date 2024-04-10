import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/default" className="logo">
        <img src="./src/assets/cat_logo_b.png" alt="CompanyLogo" />
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
  );
};
export default Footer;
