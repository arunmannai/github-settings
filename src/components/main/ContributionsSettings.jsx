function ContributionsSettings() {
  return (
    <>
      <h2>Contributions & Activity</h2>
      <hr />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="check1"
          name="option1"
          value="something"
          checked
        />
        <label className="form-check-label">
          Make profile private and hide activity
        </label>
        <p>
          Enabling this will hide your contributions and activity from your
          GitHub profile and from social features like followers, stars, feeds,
          leaderboards and releases.
        </p>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="check1"
          name="option1"
          value="something"
          checked
        />
        <label className="form-check-label">
          Include private contributions on my profile
        </label>
        <p>
          Your contribution graph, achievements, and activity overview will show
          your private contributions without revealing any repository or
          organization information. Read more.
        </p>
      </div>
      <button type="text" className="btn btn-secondary btn-custom mb-5">
        Update preferences
      </button>
    </>
  );
}
export default ContributionsSettings;
