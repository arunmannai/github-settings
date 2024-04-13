function ProfileSettings() {
  return (
    <>
      <h2>Profile settings</h2>
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
          Show Achievements on my profile
        </label>
        <p>
          Enabling this will hide your contributions and activity from your
          GitHub profile and from social features like followers, stars, feeds,
          leaderboards and releases.
        </p>
      </div>
      <button type="text" className="btn btn-secondary btn-custom mb-5">
        Update preferences
      </button>
    </>
  );
}
export default ProfileSettings;
