function JobProfileSettings() {
  return (
    <>
      <h2>Jobs profile</h2>
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
        <label className="form-check-label">Available for hire</label>
      </div>
      <button type="text" className="btn btn-secondary btn-custom mb-5">
        Save jobs profile
      </button>
    </>
  );
}
export default JobProfileSettings;
