import { Accordion as AccordionPrimitive } from "radix-ui";

import { CollapsibleList } from "@/components/collapsible-list";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id="projects" className="scroll-mt-22">
      <PanelHeader>
        <PanelTitle>
          PROJECTS
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <AccordionPrimitive.Root
        type="multiple"
        defaultValue={PROJECTS.map(project => project.id)}
      >
        <CollapsibleList
          items={PROJECTS}
          max={4}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      </AccordionPrimitive.Root>
    </Panel>
  );
}
