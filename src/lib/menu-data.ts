export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags: Array<"veg" | "vegan" | "gluten-free" | "spicy" | "signature">;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    label: "All-day Breakfast",
    items: [
      {
        name: "Tangerine Ricotta Hotcakes",
        description: "Citrus glaze, whipped ricotta, candied peel, maple",
        price: "380",
        tags: ["veg", "signature"],
      },
      {
        name: "Sourdough & Avocado",
        description: "Smashed avocado, chilli oil, soft herbs, lime",
        price: "340",
        tags: ["vegan", "spicy"],
      },
      {
        name: "Masala Scramble",
        description: "Farm eggs, tomato, onion, coriander, buttered toast",
        price: "310",
        tags: ["veg", "spicy"],
      },
      {
        name: "Seasonal Fruit & Curd Bowl",
        description: "Hung curd, honey, toasted seeds, orange segments",
        price: "290",
        tags: ["veg", "gluten-free"],
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee & Brews",
    items: [
      {
        name: "Single-Origin Flat White",
        description: "Chikmagalur beans, roasted weekly in Pune",
        price: "240",
        tags: ["veg", "signature"],
      },
      {
        name: "Cold Brew Tonic",
        description: "18-hour cold brew, tonic, tangerine peel",
        price: "260",
        tags: ["vegan"],
      },
      {
        name: "Filter Coffee",
        description: "South Indian style, jaggery on the side",
        price: "170",
        tags: ["veg"],
      },
      {
        name: "Cocoa & Cardamom",
        description: "Dark chocolate, cardamom, steamed milk",
        price: "250",
        tags: ["veg"],
      },
    ],
  },
  {
    id: "plates",
    label: "Plates & Sharing",
    items: [
      {
        name: "The Warm Table Platter",
        description: "Charred vegetables, whipped hummus, sourdough, dukkah",
        price: "520",
        tags: ["veg", "signature"],
      },
      {
        name: "Burnt Chilli Pasta",
        description: "Hand-cut tagliatelle, garlic, burnt chilli, parmesan",
        price: "460",
        tags: ["veg", "spicy"],
      },
      {
        name: "Pune Bowl",
        description: "Millet, roasted pumpkin, greens, tahini, pickled onion",
        price: "420",
        tags: ["vegan", "gluten-free"],
      },
      {
        name: "Slow-Roast Chicken Sandwich",
        description: "Brioche, herb mayo, slaw, house fries",
        price: "480",
        tags: [],
      },
    ],
  },
  {
    id: "sweet",
    label: "Sweet",
    items: [
      {
        name: "Tangerine Olive Oil Cake",
        description: "Citrus syrup, crème fraîche, candied zest",
        price: "300",
        tags: ["veg", "signature"],
      },
      {
        name: "Dark Chocolate Tart",
        description: "70% ganache, sea salt, cocoa nib crumble",
        price: "320",
        tags: ["veg"],
      },
      {
        name: "Coconut Panna Cotta",
        description: "Seasonal fruit, toasted coconut",
        price: "280",
        tags: ["vegan", "gluten-free"],
      },
    ],
  },
];

export const tagLabels: Record<MenuItem["tags"][number], string> = {
  veg: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten free",
  spicy: "Spicy",
  signature: "Signature",
};
