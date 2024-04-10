function PublicProfileSettings() {
  return (
    <div className="sidebar">
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1 selected-sidebar-setting">
          <img
            src="./src/assets/pub.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Public profile
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/sett.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Account
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/Appe.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Appearance
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/access.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Accessibility
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Notifications
        </li>
      </ul>
    </div>
  );
}

export default PublicProfileSettings;
