export const slides: SlidesInt[] = [
  {
    id: 1,
    name: "Tonkotsu",
    desc: "Purposeful design in an inspiring page",
    image: [
      "https://utfs.io/f/82ef65fa-191d-41c3-8465-a09b6d6296e2_photo_5990077385086713773_y.jpg",
      "https://utfs.io/f/0be2597b-422c-4770-a502-346eb1b199d8_photo_5990077385086713784_y.jpg",
      "https://utfs.io/f/7d763bb7-e5eb-4285-9300-cafdf5e0c470_photo_5990077385086713782_y.jpg",
      "https://utfs.io/f/e39cfecc-39c0-475c-ad5b-f95e72897901_Tonkotsu%201.jpg",
      "https://utfs.io/f/a134d67b-3f35-4ef1-8c2a-9eec27076b00_Tonkotsu%207.jpg",
    ],
    slug: "tonkotsu",
  },
  {
    id: 2,
    name: "Miso",
    desc: "Wood is everything",
    image: [
      "https://cannonkeys.com/cdn/shop/files/3cIBSqX_1080x.jpg?v=1686952825",
      "https://cannonkeys.com/cdn/shop/files/kYPY2T4_bb6bb292-ef15-49ce-a3b6-5d531dcebdc5_1080x.jpg?v=1686952825",
      "https://cannonkeys.com/cdn/shop/files/ph4LIdk_febe3280-e543-453a-8ea0-df6a24bb170c_1080x.jpg?v=1686952825",
      "https://cannonkeys.com/cdn/shop/files/1bLmsEO_4eb35085-2fe0-47f2-a947-40ce661f47db_1080x.jpg?v=1686952825",
      "https://cannonkeys.com/cdn/shop/files/gMBqAlk_9ca8cfe1-30db-4909-9575-f3e47078a231_1080x.jpg?v=1686952825",
    ],
    slug: "miso",
  },
  {
    id: 3,
    name: "Shoyu",
    desc: "Cozy with wood",
    image: [
      "https://uploadthing.com/f/400bd977-6f6c-49ac-b4fa-37686e45c3c7_Shoyu5.jpg",
      "https://utfs.io/f/afda2013-a995-4ae1-87d2-1ec78598960a_Shoyu%201.jpg",
      "https://utfs.io/f/76c55896-acc1-4d01-85a8-54986f41fcb0_Shoyu3.jpg",
      "https://utfs.io/f/24d22af6-3178-4f98-a3ca-5f13b6a46118_Shoyu4.jpg",
      "https://utfs.io/f/6d22e1b3-1c48-440c-9157-07493a417a5b_Shoyu6.jpg",
    ],
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
