import PublicProfileMainSettings from "./main/PublicProfileMainSettings";
import ContributionsSettings from "./main/ContributionsSettings";
import ProfileSettings from "./main/ProfileSettings";
import GitHubDeveloperPro from "./main/GitHubDeveloperPro";
import JobProfileSettings from "./main/JobProfileSettings";
import TrendingSettings from "./main/TrendingSettings";

function Home() {
  return (
    <>
      <PublicProfileMainSettings />
      <ContributionsSettings />
      <ProfileSettings />
      <GitHubDeveloperPro />
      <JobProfileSettings />
      <TrendingSettings />
    </>
  );
}

export default Home;
