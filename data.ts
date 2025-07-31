const products = [
  {
    id: "1",
    imageUri: require("@/assets/images/ui/image7.png"),
    title: "Cool Jacket",
    price: 49.99,
    description:
      "This cool jacket is made with breathable cotton and has a modern urban fit. Perfect for cool evenings and stylish layering.",
    averageRating: 4.5,
    totalReviews: 87,
    sizeVariants: ["S", "M", "L", "XL"],
    category: "Jackets",
    reviews: [
      {
        id: "r1",
        user: "Aayush M.",
        rating: 5,
        comment: "Love the fit and quality — totally worth it!",
      },
      {
        id: "r2",
        user: "Sneha C.",
        rating: 4,
        comment: "Looks great, but wish it had an inside pocket.",
      },
    ],
  },
  {
    id: "2",
    imageUri: require("@/assets/images/ui/image2.png"),
    title: "Comfy Hoodie",
    price: 39.99,
    description:
      "Super soft and comfy hoodie made from premium fleece. Ideal for lounging or casual outings.",
    averageRating: 4.8,
    totalReviews: 112,
    sizeVariants: ["M", "L", "XL"],
    category: "Hoodies",
    reviews: [
      {
        id: "r3",
        user: "Rajan S.",
        rating: 5,
        comment: "Wore it once and got 3 compliments the same day.",
      },
      {
        id: "r4",
        user: "Nisha T.",
        rating: 4,
        comment: "Very warm and cozy. Sleeves are a bit long though.",
      },
    ],
  },
  {
    id: "3",
    imageUri: require("@/assets/images/ui/image2.png"),
    title: "Sneakers",
    price: 89.99,
    description:
      "Stylish unisex sneakers with ultra-light sole and breathable mesh design. Run, walk, or flex.",
    averageRating: 4.2,
    totalReviews: 56,
    sizeVariants: ["7", "8", "9", "10", "11"],
    category: "Footwear",
    reviews: [
      {
        id: "r5",
        user: "Bibek K.",
        rating: 4,
        comment: "Looks amazing, but order one size up.",
      },
      {
        id: "r6",
        user: "Ritika P.",
        rating: 5,
        comment: "My favorite shoes now. Light, comfy, and 🔥",
      },
    ],
  },
  {
    id: "4",
    imageUri: require("@/assets/images/ui/image5.png"),
    title: "Denim Jeans",
    price: 59.99,
    description:
      "Classic denim with a modern cut. Slightly stretchy and ready to go from day to night without losing its shape.",
    averageRating: 4.7,
    totalReviews: 76,
    sizeVariants: ["28", "30", "32", "34", "36"],
    category: "Bottoms",
    reviews: [
      {
        id: "r7",
        user: "Kabir N.",
        rating: 5,
        comment: "The fit is top tier. Feels premium af.",
      },
      {
        id: "r8",
        user: "Manisha S.",
        rating: 4,
        comment: "I liked it but had to exchange for a smaller size.",
      },
    ],
  },
  {
    id: "5",
    imageUri: require("@/assets/images/ui/image4.png"),
    title: "Graphic Tee",
    price: 19.99,
    description:
      "Soft cotton tee featuring a minimalist back print. Breathable, lightweight, and great for layering.",
    averageRating: 4.4,
    totalReviews: 34,
    sizeVariants: ["S", "M", "L", "XL", "XXL"],
    category: "T-shirts",
    reviews: [
      {
        id: "r9",
        user: "Sujan D.",
        rating: 4,
        comment: "The print is subtle but stylish. Loved it!",
      },
      {
        id: "r10",
        user: "Neha K.",
        rating: 5,
        comment: "Super comfy and goes with everything.",
      },
    ],
  },
  {
    id: "6",
    imageUri: require("@/assets/images/ui/image2.png"),
    title: "Casual Shirt",
    price: 44.99,
    description:
      "A button-up shirt made from breathable linen. Ideal for brunch dates, office days, and everything in between.",
    averageRating: 4.6,
    totalReviews: 61,
    sizeVariants: ["S", "M", "L", "XL"],
    category: "Shirts",
    reviews: [
      {
        id: "r11",
        user: "Rehan A.",
        rating: 5,
        comment: "Fit is elite. Definitely buying more colors.",
      },
      {
        id: "r12",
        user: "Pooja C.",
        rating: 4,
        comment: "Color was slightly lighter than expected, but cute.",
      },
    ],
  },
];

export default products;
