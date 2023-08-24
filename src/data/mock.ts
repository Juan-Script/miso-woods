export const slides: SlidesInt[] = [
  {
    id: 1,
    name: "Tonkotsu",
    desc: "Purposeful design in an inspiring page",
    image: [
      "https://utfs.io/f/82ef65fa-191d-41c3-8465-a09b6d6296e2_photo_5990077385086713773_y.jpg",
      "https://utfs.io/f/0be2597b-422c-4770-a502-346eb1b199d8_photo_5990077385086713784_y.jpg",
      "https://utfs.io/f/7d763bb7-e5eb-4285-9300-cafdf5e0c470_photo_5990077385086713782_y.jpg",
    ],
    slug: "tonkotsu",
  },
  {
    id: 2,
    name: "Miso",
    desc: "Wood is everything",
    image: [],
    slug: "miso",
  },
  {
    id: 3,
    name: "Shoyu",
    desc: "Cozy with wood",
    image: [],
    slug: "shoyu",
  },
];

export interface SlidesInt {
  id: number;
  name: string;
  desc: string;
  image: string[];
  slug: string;
}
