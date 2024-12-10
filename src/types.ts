export interface Project {
  id: number;
  title: string;
  description: string;
  mainImage?: string; // Optional, since not all projects might have this field
  allImages?: string[];
  image?: string; // Optional alternative image field
  details: string;
  features: string[];
  technologies: string[];
  url: string;
}
