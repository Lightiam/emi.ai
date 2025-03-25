export interface Link {
  id: number;
  name: string;
  link: string;
}

export const landingPageLinks: Link[] = [
  {
    id: 1,
    name: "Hire Workers",
    link: "/hire-experts",
  },
  {
    id: 2,
    name: "Find Jobs",
    link: "/find-job",
  },
  {
    id: 3,
    name: "Buy Materials",
    link: "/buy-materials",
  },
];
