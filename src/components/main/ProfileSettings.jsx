import SettingsCheckbox from "./SettingsCheckbox";

function ProfileSettings() {
  const show_achievements_title = "Show Achievements on my profile";
  const show_achievements_summary = `
Enabling this will hide your contributions and activity from your GitHub
profile and from social features like followers, stars, feeds,
leaderboards and releases.
`;

  return (
    <>
      <h2>Profile settings</h2>
      <hr />
      <SettingsCheckbox
        name="show_achievements"
        title={show_achievements_title}
        summary={show_achievements_summary}
      />
      <button
        onClick={() => alert("Updated preferences")}
        className="btn btn-secondary btn-custom mb-5"
      >
        Update preferences
      </button>
    </>
  );
}

export default ProfileSettings;
