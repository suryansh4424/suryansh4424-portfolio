export type CourseCategory = "Programming Languages" | "Frontend" | "Backend";

export type Course = {
  title: string;
  provider: string;
  category: CourseCategory;
  technology: string;
  certificateUrl: string;
};
