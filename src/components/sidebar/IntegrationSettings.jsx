function IntegrationSettings() {
  return (
    <div className="sidebar">
      Security
      <ul className="list-group-flush ms-0 ps-0">
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Applications
        </li>
        <li className="list-group-item mb-1">
          <img
            src="./src/assets/bell.png"
            alt="CompanyLogo"
            className="rounded-pill"
          />
          Scheduled reminders
        </li>
      </ul>
    </div>
  );
}

export default IntegrationSettings;
