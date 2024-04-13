import SettingsCheckbox from "./SettingsCheckbox";

function ContributionsSettings() {
  const hide_activity_title = "Make profile private and hide activity";
  const hide_activity_summary = `
  Enabling this will hide your contributions and activity from your GitHub
  profile and from social features like followers, stars, feeds,
  leaderboards and releases.
  `;

  const private_contributions_title =
    "Include private contributions on my profile";
  const private_contributions_summary = `
  Your contribution graph, achievements, and activity overview will show
  your private contributions without revealing any repository or
  organization information. <a href="">Read more.</a>
  `;

  return (
    <>
      <h2>Contributions & Activity</h2>
      <hr />
      <SettingsCheckbox
        name="hide_activity"
        title={hide_activity_title}
        summary={hide_activity_summary}
      />
      <SettingsCheckbox
        name="private_contributions"
        title={private_contributions_title}
        summary={private_contributions_summary}
      />
      <button className="btn btn-secondary btn-custom mb-5">
        Update preferences
      </button>
    </>
  );
}

export default ContributionsSettings;
