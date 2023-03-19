import house1 from "assets/background.webp";
import house2 from "assets/bg_house.webp";
import house3 from "assets/bg.webp";

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  description: string;
}


export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Blog Article 1",
    image: house1,
    date: "February 22, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Blog Article 2",
    image: house2,
    date: "January 1, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Blog Article 3",
    image: house3,
    date: "March 1, 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];