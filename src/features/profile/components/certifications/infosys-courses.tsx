import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  COURSE_CATEGORY_ORDER,
  INFOSYS_COURSES,
} from "@/features/profile/data/infosys-courses";
import type { Certification } from "@/features/profile/types/certifications";

import { CertificationItem } from "./certification-item";

export function InfosysCourses() {
  const hasExtraCourses = COURSE_CATEGORY_ORDER.some(
    (category) =>
      INFOSYS_COURSES.filter((course) => course.category === category).length >
      1
  );

  return (
    <Collapsible className="space-y-4 border-t border-edge pt-4">
      <div id="courses" className="scroll-mt-22 space-y-1 px-4">
        <h3 className="font-heading text-base font-medium">Infosys Courses</h3>
      </div>

      <div className="space-y-4">
        {COURSE_CATEGORY_ORDER.map((category) => {
          const courses = INFOSYS_COURSES.filter(
            (course) => course.category === category
          );

          if (courses.length === 0) return null;

          const previewCourses = courses.slice(0, 1);
          const hiddenCourses = courses.slice(1);

          return (
            <div key={category} className="space-y-2 px-4">
              <h4 className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                {category}
              </h4>

              <div className="space-y-0">
                {previewCourses.map((course) => {
                  const certification: Certification = {
                    title: course.title,
                    issuer: "Infosys",
                    issueDate: "2025-01-01",
                    credentialID: `${category}-${course.title}`,
                    credentialURL: course.certificateUrl,
                  };

                  return (
                    <CertificationItem
                      key={certification.credentialID}
                      certification={certification}
                      showDate={false}
                    />
                  );
                })}

                {hiddenCourses.length > 0 && (
                  <CollapsibleContent>
                    {hiddenCourses.map((course) => {
                      const certification: Certification = {
                        title: course.title,
                        issuer: "Infosys",
                        issueDate: "2025-01-01",
                        credentialID: `${category}-${course.title}`,
                        credentialURL: course.certificateUrl,
                      };

                      return (
                        <CertificationItem
                          key={certification.credentialID}
                          certification={certification}
                          showDate={false}
                        />
                      );
                    })}
                  </CollapsibleContent>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {hasExtraCourses && (
        <div className="flex h-12 items-center justify-center pb-px">
          <CollapsibleTrigger asChild>
            <Button
              className="group/collapsible-trigger flex"
              variant="secondary"
            >
              <span className="hidden group-data-[state=closed]/collapsible-trigger:block">
                Show More Courses
              </span>
              <span className="hidden group-data-[state=open]/collapsible-trigger:block">
                Show Less Courses
              </span>
              <ChevronDownIcon className="group-data-[state=open]/collapsible-trigger:rotate-180" />
            </Button>
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  );
}
