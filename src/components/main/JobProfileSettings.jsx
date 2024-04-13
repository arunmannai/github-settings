import SettingsCheckbox from "./SettingsCheckbox";

function JobProfileSettings() {
  return (
    <>
      <h2>Jobs profile</h2>
      <hr />
      <SettingsCheckbox name="available_for_hire" title="Available for hire" />
      <button
        onClick={() => alert("Saved jobs profile")}
        className="btn btn-secondary btn-custom mb-5 mt-2"
      >
        Save jobs profile
      </button>
    </>
  );
}

export default JobProfileSettings;
