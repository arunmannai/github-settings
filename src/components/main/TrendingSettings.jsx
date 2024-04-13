function TrendingSettings() {
  return (
    <>
      <h2>Trending settings</h2>
      <hr />
      <input type="text" placeholder="No Preference" className="form-control" />
      <p>
        <span>
          We'll use this language preference to filter the trending repository
          lists on Explore and our Trending Repositories page.
        </span>
      </p>
      <button type="text" className="btn btn-secondary btn-custom mb-5">
        Save Trending settings
      </button>
    </>
  );
}
export default TrendingSettings;
