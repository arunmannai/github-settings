function AccessSettings() {
  return (
    <div className="sidebar">
      Access
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/pub.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Billing and plans
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/sett.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Emails
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/Appe.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Password and authentication
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/access.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Sessions
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          SSH and GPG keys
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Organizations
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Moderation
        </li>
      </ul>
    </div>
  );
}

export default AccessSettings;
