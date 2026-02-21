export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  certifications: string[];
  linkedin?: string;
  photo?: string;
};

export const equipo: TeamMember[] = [
  {
    name: "Jorge López Ramos",
    role: "team.members.jorge.role",
    bio: "team.members.jorge.bio",
    certifications: ["team.certs.irca", "team.certs.taproot", "team.certs.ruc", "team.certs.norsok"],
    linkedin: "https://www.linkedin.com/in/jorgelopezramos",
    photo: "/Jorge-lopez.jpg",
  },
];
