import { MapPinIcon } from "lucide-react";

import { USER } from "@/data/user";

import { Panel, PanelContent } from "../panel";
import { EmailItem } from "./email-item";
import { IntroItem } from "./intro-item";
import { JobItem } from "./job-item";
import { PhoneItem } from "./phone-item";

export function Overview() {
  return (
    <Panel>
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="space-y-2">
        {USER.jobs.map((job, index) => {
          return (
            <JobItem
              key={index}
              title={job.title}
              company={job.company}
              website={job.website}
            />
          );
        })}

        <IntroItem icon={MapPinIcon} content={USER.address} />

        <PhoneItem phoneNumber={USER.phoneNumber} />

        <EmailItem email={USER.email} />




      </PanelContent>
    </Panel>
  );
}
