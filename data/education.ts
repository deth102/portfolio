export type Education = {
  id: "master" | "bachelor";
  hasNote?: boolean;
};

// EDIT THIS FILE TO UPDATE YOUR EDUCATION TIMELINE.
export const educations: Education[] = [
  {id: "master"},
  {id: "bachelor", hasNote: true},
];
