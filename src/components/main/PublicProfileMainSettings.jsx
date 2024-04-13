import SettingsCheckbox from "./SettingsCheckbox";

function PublicProfileMainSettings() {
  const display_local_time_title = "Display current local time";
  const display_local_time_summary =
    "Other users will see the time difference from their local time.";

  return (
    <div className="container-fluid">
      <div className="mb-3">
        <h2>Public profile</h2>
        <hr />
        <h5>Name</h5>
        <input
          type="text"
          placeholder="Peter Griffin"
          className="form-control"
        />
        <div className="description">
          Your name may appear around GitHub where you contribute or are
          mentioned. You can remove it at any time.
        </div>
      </div>
      <div className="mb-3">
        <h5>Public email</h5>
        <select className="form-select" defaultValue="">
          <option value="" disabled>
            Select a verified email to display
          </option>
        </select>
        <div className="description">
          You have set your email address to private. To toggle email privacy,
          go to email settings and uncheck "Keep my email address private."
        </div>
      </div>
      <div className="mb-3">
        <h5>Bio</h5>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Tell us a little bit about yourself"
        ></textarea>

        <div className="description">
          You can @mention other users and organizations to link to them.
        </div>
      </div>
      <div className="mb-3">
        <h5>Pronouns</h5>
        <select className="form-select" defaultValue="">
          <option value="" disabled>
            Don't specify
          </option>
        </select>
      </div>
      <div className="mb-3">
        <h5>URL</h5>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <h5>Social accounts</h5>
        <ul className="list-group-flush ms-0 ps-0">
          <li className="list-group-item mb-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <img
                  src="/assets/linkicon.png"
                  alt="linkicon"
                  className="rounded-pill"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Link to social profile"
                />
              </div>
            </div>
          </li>
          <li className="list-group-item mb-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <img
                  src="/assets/linkicon.png"
                  alt="linkicon"
                  className="rounded-pill"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Link to social profile"
                />
              </div>
            </div>
          </li>
          <li className="list-group-item mb-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <img
                  src="/assets/linkicon.png"
                  alt="linkicon"
                  className="rounded-pill"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Link to social profile"
                />
              </div>
            </div>
          </li>
          <li className="list-group-item mb-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <img
                  src="/assets/linkicon.png"
                  alt="linkicon"
                  className="rounded-pill"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Link to social profile"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <input type="text" className="form-control" />
        <div className="description">
          You can <strong>@mention</strong> your company’s GitHub organization
          to link it.
        </div>
        <hr />
      </div>
      <div className="mt-2">
        <h5>Location</h5>
        <input
          type="text"
          className="form-control"
          placeholder="Dubuque, Iowa"
        />
      </div>
      <div className="mt-3">
        <SettingsCheckbox
          name="display_local_time"
          title={display_local_time_title}
          summary={display_local_time_summary}
        />
        <div className="description">
          All of the fields on this page are optional and can be deleted at any
          time, and by filling them out, you're giving us consent to share this
          data wherever your user profile appears. Please see our
          <a href="">privacy statement</a> to learn more about how we use this
          information.
        </div>
      </div>
      <button className="btn btn-success mb-5 mt-2">Update profile</button>
    </div>
  );
}

export default PublicProfileMainSettings;
