function TrendingSettings() {
  return (
    <>
      <h2>Trending settings</h2>
      <hr />
      <select className="form-select" defaultValue="">
        <option value="" disabled>
          No Preference
        </option>
      </select>
      <div className="description mt-3">
        We'll use this language preference to filter the trending repository
        lists on Explore and our Trending Repositories page.
      </div>
      <button className="btn btn-secondary btn-custom mb-5 mt-2">
        Save Trending settings
      </button>
    </>
  );
}
export default TrendingSettings;
