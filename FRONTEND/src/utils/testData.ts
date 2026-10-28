import {
  AcctiveLife,
  Gym,
  HybridWorkouot,
  MenRunning,
  OdeCricket,
  Retouched,
  Running,
  sfvfv,
} from "../images";

export const filtersData = [
  "Featured",
  "Most relevant",
  "Best selling",
  "Alphabetically, A-Z",
  "Alphabetically, Z-A",
  "Price, low to high",
  "Price, high to low",
  "Date, old to new",
  "Date, new to old",
];

export const navMenuData = {
  featured: {
    title: "Featured",
    href: "/collections/featured-all",
    menu: [
      {
        title: "An Ode to Cricket ",
        href: "/pages/an-ode-to-cricket",
      },
      {
        title: "Active Lifestyle",
        href: "/pages/active-lifestyle",
      },
      {
        title: "Cover Drive",
        href: "/pages/cover-drive",
      },
      {
        title: "Hybrid Workout",
        href: "/pages/hybrid-workout",
      },
    ],

    images: [
      {
        title: "Cricket",
        image: OdeCricket,
        href: "/collections/cricket-all",
      },
      {
        title: "Active Lifestyle",
        image: AcctiveLife,
        href: "/collections/active-lifestyle",
      },
      {
        title: "Hybrid Workout",
        image: HybridWorkouot,
        href: "/collections/hybrid-workout",
      },
    ],
  },

  women: {
    title: "Women",
    href: "/collections/women-all",

    menu: [
      {
        title: "Featured",
        children: {
          heading: "By Products",
          items: [
            {
              title: "Seam Collection",
              href: "/collections/seam-collection",
            },
            {
              title: "Active Lifestyle",
              href: "/collections/active-lifestyle",
            },
          ],
        },
      },

      {
        title: "Footwear",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/women-footwear",
            },
            {
              title: "Gym",
              href: "/collections/women-gym",
            },
            {
              title: "Running",
              href: "/collections/women-running",
            },
            {
              title: "Sneakers",
              href: "/collections/women-sneakers",
            },
          ],
        },
      },

      {
        title: "Clothing",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/women-clothing",
            },
            {
              title: "T-shirts",
              href: "/collections/women-tshirts",
            },
            {
              title: "Jackets",
              href: "/collections/women-jackets",
            },
            {
              title: "Tank Tops",
              href: "/collections/women-tank-tops",
            },
            {
              title: "Leggings",
              href: "/collections/women-leggings",
            },
            {
              title: "Shorts",
              href: "/collections/women-shorts",
            },
          ],
        },
      },

      {
        title: "Caps",
        href: "/collections/women-caps",
      },

      {
        title: "Activity",
        children: {
          heading: "By Activity",
          items: [
            {
              title: "Lifestyle",
              href: "/collections/women-lifestyle",
            },
            {
              title: "Gym",
              href: "/collections/women-gym",
            },
            {
              title: "Running",
              href: "/collections/women-running",
            },
          ],
        },
      },

      {
        title: "Bestsellers",
        href: "/collections/women-bestsellers",
      },

      {
        title: "New Arrivals",
        href: "/collections/women-new-arrivals",
      },
    ],

    images: [
      {
        title: "Gym",
        image: Gym,
        href: "/collections/women-gym",
      },
      {
        title: "Sneakers",
        image: Retouched,
        href: "/collections/women-sneakers",
      },
    ],
  },

  men: {
    title: "Men",
    href: "/collections/men-all",

    menu: [
      {
        title: "Featured",
        href: "/collections/men-featured",
      },
      {
        title: "Footwear",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/men-footwear",
            },
            {
              title: "Gym",
              href: "/collections/men-gym",
            },
            {
              title: "Running",
              href: "/collections/men-running",
            },
            {
              title: "Cricket",
              href: "/collections/men-cricket",
            },
            {
              title: "Sneakers",
              href: "/collections/men-sneakers",
            },
          ],
        },
      },
      {
        title: "Clothing",
        children: {
          heading: "By Products",
          items: [
            {
              title: "View All",
              href: "/collections/men-clothing",
            },
            {
              title: "T-shirts",
              href: "/collections/men-tshirts",
            },
            {
              title: "Polos",
              href: "/collections/men-polos",
            },
            {
              title: "Sweatshirts",
              href: "/collections/men-sweatshirts",
            },
            {
              title: "Jackets",
              href: "/collections/men-jackets",
            },
            {
              title: "Pants",
              href: "/collections/men-pants",
            },
            {
              title: "Shorts",
              href: "/collections/men-shorts",
            },
          ],
        },
      },
      {
        title: "Caps",
        href: "/collections/men-caps",
      },
      {
        title: "Activity",
        children: {
          heading: "By Activity",
          items: [
            {
              title: "Running",
              href: "/collections/men-running",
            },
            {
              title: "Gym",
              href: "/collections/men-gym",
            },
            {
              title: "Cricket",
              href: "/collections/men-cricket",
            },
            {
              title: "Lifestyle",
              href: "/collections/men-lifestyle",
            },
          ],
        },
      },
      {
        title: "Bestsellers",
        href: "/collections/men-bestsellers",
      },
      {
        title: "New Arrivals",
        href: "/collections/men-new-arrivals",
      },
    ],

    images: [
      {
        title: "Seam Collection",
        image: sfvfv,
        href: "/collections/men-seam",
      },
      {
        title: "Gym",
        image: Running,
        href: "/collections/men-gym",
      },
      {
        title: "Running",
        image: MenRunning,
        href: "/collections/men-running-shoes",
      },
    ],
  },

  kids: {
    title: "Kids",
    href: "/collections/kids-all",

    menu: [],

    images: [],
  },
};
