function PublicProfileMainSettings() {
  return (
    <>
      <div className="container-fluid mb-3">
        <h2>Public profile</h2>
        <hr />
        <h5>Name</h5>
        <input
          type="text"
          placeholder="Peter Griffin"
          className="form-control"
        />
        <br />
        <span>
          Your name may appear around GitHub where you contribute or are
          mentioned. You can remove it at any time.
        </span>
      </div>
      <div className="container-fluid mb-3">
        <h5>Public email</h5>
        <input
          type="number"
          placeholder="Select a verified email to display"
          className="form-control"
        />
        <br />
        <span>
          You have set your email address to private. To toggle email privacy,
          go to email settings and uncheck "Keep my email address private."
        </span>
      </div>
      <div className="container-fluid mb-3">
        <h5>Bio</h5>
        <input
          type="number"
          placeholder="Select a verified email to display"
          className="container p-5 border"
        />
        <br />
        <span>
          You can @mention other users and organizations to link to them.
        </span>
      </div>
      <div className="container-fluid mb-3">
        <h5>Pronouns</h5>
        <input
          type="number"
          placeholder="Don't specify"
          className="form-control"
        />
        <br />
      </div>
      <div className="container-fluid mb-3">
        <h5>URL</h5>
        <input type="number" className="form-control" />
      </div>
      <div className="container-fluid mb-3">
        <h5>Social accounts</h5>
        <ul className="list-group-flush ms-0 ps-0">
          <li className="list-group-item mb-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <img
                  src="./src/assets/linkicon.png"
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
                  src="./src/assets/linkicon.png"
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
                  src="./src/assets/linkicon.png"
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
                  src="./src/assets/linkicon.png"
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
      <div className="container-fluid">
        <h5>Company</h5>
        <input type="number" className="form-control" />
        <span>
          You can @mention your company’s GitHub organization to link it.
        </span>
        <hr />
      </div>
      <div className="container-fluid mt-2">
        <h5>Location</h5>
        <input
          type="number"
          className="form-control"
          placeholder="Dubuque, Iowa"
        />
      </div>
      <div className="container-fluid">
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="check1"
            name="option1"
            value="something"
            checked
          />
          <label className="form-check-label">Display current local time</label>
          <p>
            <span>
              Other users will see the time difference from their local time.
            </span>
          </p>

          <p>
            <span>
              All of the fields on this page are optional and can be deleted at
              any time, and by filling them out, you're giving us consent to
              share this data wherever your user profile appears. Please see our
              privacy statement to learn more about how we use this information.
            </span>
          </p>
        </div>
      </div>
      <button type="button" className="btn btn-success mb-5">
        Update profile
      </button>
    </>
  );
}

export default PublicProfileMainSettings;
