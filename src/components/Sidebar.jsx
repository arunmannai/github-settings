import PublicProfileSettings from "./sidebar/PublicProfileSettings";
import AccessSettings from "./sidebar/AccessSettings";
import CodeAutomationSettings from "./sidebar/CodeAutomationSettings";
import SecuritySettings from "./sidebar/SecuritySettings";
import IntegrationSettings from "./sidebar/IntegrationSettings";
import ArchivesSettings from "./sidebar/ArchivesSettings";
import DevSettings from "./sidebar/DevSettings";

function Sidebar() {
  return (
    <>
      <PublicProfileSettings />
      <AccessSettings />
      <CodeAutomationSettings />
      <SecuritySettings />
      <IntegrationSettings />
      <ArchivesSettings />
      <DevSettings />
    </>
  );
}

export default Sidebar;
