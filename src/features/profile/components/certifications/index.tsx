import { CollapsibleList } from "@/components/collapsible-list";

import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { CertificationItem } from "./certification-item";
import { InfosysCourses } from "./infosys-courses";

export function Certifications() {
  return (
    <Panel id="certs" className="scroll-mt-22">
      <PanelHeader>
        <PanelTitle>
          CERTIFICATIONS
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({CERTIFICATIONS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={CERTIFICATIONS}
        renderItem={(item) => <CertificationItem certification={item} />}
      />

      <InfosysCourses />
    </Panel>
  );
}
