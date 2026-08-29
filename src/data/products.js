const products = [
  // ================= BIRTHDAY CAKES =================
  {
  id: 1,
  slug: "chocolate-birthday-cake",
  name: "Chocolate Birthday Cake",
  description:
    "A rich chocolate birthday cake decorated with smooth buttercream frosting and premium toppings.",

  category: "Birthday Cakes",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/cake1.webp",
  images: [
    "/cake1.webp",
    "/cake8.jpg",
    "/cake10.webp",
  ],

  price: 28000,
  oldPrice: 32000,
  discount: 15,

  inStock: true,
  stock: 12,

  featured: true,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 5,
  reviews: 24,

  sku: "LC-001",
  brand: "L'Chaim Cakes",

  tags: [
    "Birthday",
    "Chocolate",
    "Cake"
  ]
},


 {
  id: 2,
  slug: "pink-celebration-cake",
  name: "Pink Celebration Cake",
  description:
    "Elegant pink buttercream celebration cake suitable for birthdays and special occasions.",

  category: "Birthday Cakes",
  occasion: "Birthday",
  flavour: "Vanilla",

  image: "/cake8.jpg",
  images: [
    "/cake8.jpg",
    "/cake1.webp",
    "/cake10.webp",
  ],

  price: 30000,
  oldPrice: 35000,
  discount: 14,

  inStock: true,
  stock: 8,

  featured: true,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 4.8,
  reviews: 15,

  sku: "LC-002",
  brand: "L'Chaim Cakes",

  tags: [
    "Birthday",
    "Pink",
    "Vanilla"
  ]
},


  {
  id: 3,
  slug: "blue-buttercream-cake",
  name: "Blue Buttercream Cake",

  description:
    "A beautifully crafted blue buttercream birthday cake with smooth frosting and elegant finishing touches. Perfect for birthdays, family celebrations, and special occasions.",

  category: "Birthday Cakes",
  occasion: "Birthday",
  flavour: "Vanilla",

  image: "/cake10.webp",

  images: [
    "/cake10.webp",
    "/cake11.jpg",
    "/cake8.jpg",
    "/cake1.webp",
  ],

  price: 26000,
  oldPrice: 30000,
  discount: 10,

  inStock: true,
  stock: 18,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 24,

  sku: "LC-003",
  brand: "L'Chaim Cakes",

  tags: [
    "Birthday Cake",
    "Buttercream",
    "Blue Cake",
    "Vanilla",
    "Celebration",
  ],
},

{
  id: 4,
  slug: "cartoon-birthday-cake",
  name: "Cartoon Birthday Cake",

  description:
    "A fun and colourful cartoon-themed birthday cake specially designed for children's birthdays. Decorated with vibrant buttercream and playful character-inspired details.",

  category: "Birthday Cakes",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/cake11.jpg",

  images: [
    "/cake11.jpg",
    "/cake10.webp",
    "/childcake3.webp",
    "/childcake4.jpg",
  ],

  price: 32000,
  oldPrice: 36000,
  discount: 12,

  inStock: true,
  stock: 15,

  featured: false,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 4.9,
  reviews: 31,

  sku: "LC-004",
  brand: "L'Chaim Cakes",

  tags: [
    "Birthday Cake",
    "Cartoon Cake",
    "Kids Cake",
    "Chocolate",
    "Celebration",
  ],
},

  // ================= WEDDING CAKES =================
 {
  id: 5,
  slug: "elegant-white-wedding-cake",
  name: "Elegant White Wedding Cake",
  description:
    "A luxury handcrafted multi-tier wedding cake designed for elegant ceremonies.",

  category: "Wedding Cakes",
  occasion: "Wedding",
  flavour: "Vanilla",

  image: "/weddingcake1.webp",
  images: [
    "/weddingcake1.webp",
    "/weddingcakes2.jpg",
    "/weddingcakes3.jpg",
  ],

  price: 180000,
  oldPrice: 200000,
  discount: 10,

  inStock: true,
  stock: 4,

  featured: true,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 5,
  reviews: 12,

  sku: "LC-005",
  brand: "L'Chaim Cakes",

  tags: [
    "Wedding",
    "Luxury",
    "Vanilla"
  ]
},

 {
  id: 6,
  slug: "classic-wedding-cake",
  name: "Classic Wedding Cake",

  description:
    "A timeless multi-tier wedding cake elegantly handcrafted with smooth buttercream finishes and delicate decorations. Perfect for traditional and modern wedding celebrations.",

  category: "Wedding Cakes",
  occasion: "Wedding",
  flavour: "Vanilla",

  image: "/weddingcakes2.jpg",

  images: [
    "/weddingcakes2.jpg",
    "/weddingcake1.webp",
    "/weddingcakes3.jpg",
    "/weddingcakes4.webp",
  ],

  price: 200000,
  oldPrice: 230000,
  discount: 13,

  inStock: true,
  stock: 10,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 4.9,
  reviews: 18,

  sku: "LC-006",
  brand: "L'Chaim Cakes",

  tags: [
    "Wedding Cake",
    "Classic",
    "Luxury",
    "Vanilla",
    "Celebration",
  ],
},

{
  id: 7,
  slug: "luxury-wedding-cake",
  name: "Luxury Wedding Cake",

  description:
    "An exquisite luxury wedding cake crafted with premium ingredients, elegant sugar artistry, and sophisticated detailing to create an unforgettable centerpiece for your wedding day.",

  category: "Wedding Cakes",
  occasion: "Wedding",
  flavour: "Red Velvet",

  image: "/weddingcakes3.jpg",

  images: [
    "/weddingcakes3.jpg",
    "/weddingcakes4.webp",
    "/weddingcakes2.jpg",
    "/weddingcake1.webp",
  ],

  price: 250000,
  oldPrice: 280000,
  discount: 11,

  inStock: true,
  stock: 8,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: true,

  rating: 5.0,
  reviews: 26,

  sku: "LC-007",
  brand: "L'Chaim Cakes",

  tags: [
    "Wedding Cake",
    "Luxury",
    "Red Velvet",
    "Premium",
    "Celebration",
  ],
},


 {
  id: 8,
  slug: "royal-wedding-cake",
  name: "Royal Wedding Cake",

  description:
    "A luxurious multi-tier royal wedding cake handcrafted with elegant detailing and premium ingredients. Designed to make your special day truly unforgettable.",

  category: "Wedding Cakes",
  occasion: "Wedding",
  flavour: "Vanilla",

  image: "/weddingcakes4.webp",

  images: [
    "/weddingcakes4.webp",
    "/weddingcakes3.jpg",
    "/weddingcakes2.jpg",
    "/weddingcake1.webp",
  ],

  price: 220000,
  oldPrice: 250000,
  discount: 12,

  inStock: true,
  stock: 8,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 5.0,
  reviews: 22,

  sku: "LC-008",
  brand: "L'Chaim Cakes",

  tags: [
    "Wedding Cake",
    "Royal",
    "Luxury",
    "Wedding",
    "Celebration",
  ],
},

// ================= CUPCAKES =================

{
  id: 9,
  slug: "chocolate-cupcake-box",
  name: "Chocolate Cupcake Box",

  description:
    "A box of rich, moist chocolate cupcakes topped with creamy chocolate frosting. Perfect for birthdays, celebrations, gifts, and sharing with loved ones.",

  category: "Cupcakes",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/Cupcake Box.webp",

  images: [
    "/Cupcake Box.webp",
    "/cupcake1.webp",
    "/dessert2.jpg",
    "/cake8.jpg",
  ],

  price: 9000,
  oldPrice: 11000,
  discount: 18,

  inStock: true,
  stock: 25,

  featured: true,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.9,
  reviews: 47,

  sku: "LC-009",
  brand: "L'Chaim Cakes",

  tags: [
    "Cupcakes",
    "Chocolate",
    "Birthday",
    "Dessert",
    "Gift Box",
  ],
},

{
  id: 10,
  slug: "vanilla-cupcakes",
  name: "Vanilla Cupcakes",

  description:
    "Soft and fluffy vanilla cupcakes topped with smooth buttercream frosting. A delightful choice for birthdays, baby showers, and special celebrations.",

  category: "Cupcakes",
  occasion: "Baby Shower",
  flavour: "Vanilla",

  image: "/cupcake1.webp",

  images: [
    "/cupcake1.webp",
    "/Cupcake Box.webp",
    "/dessert2.jpg",
    "/cake2.jpg",
  ],

  price: 7000,
  oldPrice: 8500,
  discount: 15,

  inStock: true,
  stock: 30,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 34,

  sku: "LC-010",
  brand: "L'Chaim Cakes",

  tags: [
    "Cupcakes",
    "Vanilla",
    "Baby Shower",
    "Dessert",
    "Celebration",
  ],
},

  // ================= PASTRIES =================
{
  id: 11,
  slug: "croissant",
  name: "Croissant",

  description:
    "A light, buttery, and flaky French croissant baked to golden perfection. Perfect for breakfast, brunch, or enjoying with coffee and tea.",

  category: "Pastries",
  occasion: "Anniversary",
  flavour: "Caramel",

  image: "/Croissant.webp",

  images: [
    "/Croissant.webp",
    "/meatpie.jpg",
    "/meatpie2.jpg",
    "/sausage1.jpg",
  ],

  price: 1200,
  oldPrice: 1500,
  discount: 20,

  inStock: true,
  stock: 50,

  featured: true,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 4.9,
  reviews: 42,

  sku: "LC-011",
  brand: "L'Chaim Cakes",

  tags: [
    "Croissant",
    "French Pastry",
    "Breakfast",
    "Brunch",
    "Bakery",
  ],
},

{
  id: 12,
  slug: "meat-pie",
  name: "Meat Pie",

  description:
    "A delicious Nigerian meat pie with a rich minced beef filling wrapped in flaky golden pastry. Freshly baked and perfect for parties, snacks, and everyday enjoyment.",

  category: "Pastries",
  occasion: "Birthday",
  flavour: "Savoury",

  image: "/meatpie.jpg",

  images: [
    "/meatpie.jpg",
    "/meatpie2.jpg",
    "/sausage1.jpg",
    "/sausage2.jpg",
  ],

  price: 1800,
  oldPrice: 2200,
  discount: 10,

  inStock: true,
  stock: 45,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 38,

  sku: "LC-012",
  brand: "L'Chaim Cakes",

  tags: [
    "Meat Pie",
    "Pastries",
    "Snack",
    "Party",
    "Bakery",
  ],
},

{
  id: 13,
  slug: "meat-pie-special",
  name: "Meat Pie Special",

  description:
    "A premium version of our classic meat pie made with extra-rich beef filling, buttery pastry, and baked to perfection for a satisfying gourmet experience.",

  category: "Pastries",
  occasion: "Graduation",
  flavour: "Chocolate",

  image: "/meatpie2.jpg",

  images: [
    "/meatpie2.jpg",
    "/meatpie.jpg",
    "/sausage2.jpg",
    "/sausage4.jpg",
  ],

  price: 2000,
  oldPrice: 2400,
  discount: 15,

  inStock: true,
  stock: 35,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.9,
  reviews: 29,

  sku: "LC-013",
  brand: "L'Chaim Cakes",

  tags: [
    "Meat Pie",
    "Special",
    "Pastries",
    "Graduation",
    "Bakery",
  ],
},

 {
  id: 14,
  slug: "sausage-roll",
  name: "Sausage Roll",

  description:
    "Freshly baked sausage roll wrapped in flaky golden pastry with a deliciously seasoned sausage filling. Perfect for breakfast, parties, and quick snacks.",

  category: "Pastries",
  occasion: "Breakfast",
  flavour: "Savoury",

  image: "/sausage1.jpg",

  images: [
    "/sausage1.jpg",
    "/sausage2.jpg",
    "/sausage4.jpg",
    "/meatpie.jpg",
  ],

  price: 1200,
  oldPrice: 1500,
  discount: 10,

  inStock: true,
  stock: 45,

  featured: false,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 4.8,
  reviews: 34,

  sku: "LC-014",
  brand: "L'Chaim Cakes",

  tags: [
    "Sausage Roll",
    "Pastries",
    "Breakfast",
    "Snack",
    "Savoury",
  ],
},

{
  id: 15,
  slug: "chicken-sausage-roll",
  name: "Chicken Sausage Roll",

  description:
    "A premium chicken sausage wrapped in buttery flaky pastry and baked until perfectly golden. A delicious savoury treat for any time of the day.",

  category: "Pastries",
  occasion: "Lunch",
  flavour: "Chicken",

  image: "/sausage2.jpg",

  images: [
    "/sausage2.jpg",
    "/sausage1.jpg",
    "/sausage4.jpg",
    "/meatpie2.jpg",
  ],

  price: 1500,
  oldPrice: 1800,
  discount: 12,

  inStock: true,
  stock: 35,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.9,
  reviews: 27,

  sku: "LC-015",
  brand: "L'Chaim Cakes",

  tags: [
    "Chicken",
    "Sausage Roll",
    "Pastries",
    "Snack",
    "Lunch",
  ],
},

{
  id: 16,
  slug: "classic-sausage-roll",
  name: "Classic Sausage Roll",

  description:
    "Our signature classic sausage roll made with premium pastry and a juicy seasoned sausage filling. Crispy on the outside and deliciously tender inside.",

  category: "Pastries",
  occasion: "Breakfast",
  flavour: "Savoury",

  image: "/sausage4.jpg",

  images: [
    "/sausage4.jpg",
    "/sausage1.jpg",
    "/sausage2.jpg",
    "/meatpie.jpg",
  ],

  price: 1300,
  oldPrice: 1600,
  discount: 15,

  inStock: true,
  stock: 40,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 30,

  sku: "LC-016",
  brand: "L'Chaim Cakes",

  tags: [
    "Classic",
    "Sausage Roll",
    "Pastries",
    "Breakfast",
    "Snack",
  ],
},

  // ================= DOUGHNUTS =================
 {
  id: 17,
  slug: "classic-doughnut",
  name: "Classic Doughnut",

  description:
    "A soft and fluffy classic doughnut freshly baked and lightly coated with sugar. Perfect for breakfast, tea time, or a quick sweet treat.",

  category: "Pastries",
  occasion: "Breakfast",
  flavour: "Vanilla",

  image: "/doughnut.webp",

  images: [
    "/doughnut.webp",
    "/doughnut2.jpg",
    "/doughnut3.jpg",
    "/doughnut4.jpg",
  ],

  price: 800,
  oldPrice: 1000,
  discount: 10,

  inStock: true,
  stock: 60,

  featured: true,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 4.8,
  reviews: 38,

  sku: "LC-017",
  brand: "L'Chaim Cakes",

  tags: [
    "Doughnut",
    "Classic",
    "Breakfast",
    "Pastries",
    "Snack",
  ],
},

{
  id: 18,
  slug: "chocolate-doughnut",
  name: "Chocolate Doughnut",

  description:
    "A delicious chocolate-glazed doughnut made with soft pastry dough and topped with rich premium chocolate for an irresistible indulgence.",

  category: "Pastries",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/doughnut2.jpg",

  images: [
    "/doughnut2.jpg",
    "/doughnut.webp",
    "/doughnut3.jpg",
    "/doughnut4.jpg",
  ],

  price: 900,
  oldPrice: 1100,
  discount: 15,

  inStock: true,
  stock: 55,

  featured: false,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.9,
  reviews: 45,

  sku: "LC-018",
  brand: "L'Chaim Cakes",

  tags: [
    "Chocolate",
    "Doughnut",
    "Pastries",
    "Birthday",
    "Snack",
  ],
},

{
  id: 19,
  slug: "mini-doughnut",
  name: "Mini Doughnut",

  description:
    "Bite-sized mini doughnuts that are soft, fluffy, and lightly sweetened. Perfect for dessert tables, parties, and sharing with family and friends.",

  category: "Pastries",
  occasion: "Birthday",
  flavour: "Vanilla",

  image: "/doughnut3.jpg",

  images: [
    "/doughnut3.jpg",
    "/doughnut2.jpg",
    "/doughnut.webp",
    "/doughnut4.jpg",
  ],

  price: 700,
  oldPrice: 900,
  discount: 10,

  inStock: true,
  stock: 70,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.7,
  reviews: 31,

  sku: "LC-019",
  brand: "L'Chaim Cakes",

  tags: [
    "Mini Doughnut",
    "Vanilla",
    "Pastries",
    "Party",
    "Snack",
  ],
},


  {
  id: 20,
  slug: "mixed-doughnuts",
  name: "Mixed Doughnuts",

  description:
    "A delightful assortment of soft, fluffy doughnuts coated with chocolate, sugar, and colorful toppings. Perfect for birthdays, parties, and sweet cravings.",

  category: "Pastries",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/doughnut4.jpg",

  images: [
    "/doughnut4.jpg",
    "/doughnut.webp",
    "/doughnut2.jpg",
    "/doughnut3.jpg",
  ],

  price: 2500,
  oldPrice: 3000,
  discount: 17,

  inStock: true,
  stock: 40,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 32,

  sku: "LC-020",
  brand: "L'Chaim Cakes",

  tags: [
    "Doughnuts",
    "Chocolate",
    "Pastries",
    "Birthday",
    "Snacks",
  ],
},

// ================= PUFF PUFF =================

{
  id: 21,
  slug: "puff-puff-bowl",
  name: "Puff Puff Bowl",

  description:
    "Freshly made Nigerian puff puff served golden brown with a soft, fluffy texture. A perfect snack for graduations, parties, and everyday enjoyment.",

  category: "Pastries",
  occasion: "Graduation",
  flavour: "Vanilla",

  image: "/puff1.jpg",

  images: [
    "/puff1.jpg",
    "/puff2.jpg",
    "/doughnut4.jpg",
    "/meatpie.jpg",
  ],

  price: 1500,
  oldPrice: 1800,
  discount: 10,

  inStock: true,
  stock: 50,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.7,
  reviews: 26,

  sku: "LC-021",
  brand: "L'Chaim Cakes",

  tags: [
    "Puff Puff",
    "Pastries",
    "Graduation",
    "Snacks",
    "Nigerian Snacks",
  ],
},

{
  id: 22,
  slug: "golden-puff-puff",
  name: "Golden Puff Puff",

  description:
    "Premium handcrafted puff puff with a light, fluffy interior and golden crispy exterior. An irresistible treat for celebrations and everyday indulgence.",

  category: "Pastries",
  occasion: "Birthday",
  flavour: "Vanilla",

  image: "/puff2.jpg",

  images: [
    "/puff2.jpg",
    "/puff1.jpg",
    "/doughnut4.jpg",
    "/meatpie2.jpg",
  ],

  price: 1800,
  oldPrice: 2200,
  discount: 15,

  inStock: true,
  stock: 35,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 4.9,
  reviews: 41,

  sku: "LC-022",
  brand: "L'Chaim Cakes",

  tags: [
    "Puff Puff",
    "Luxury",
    "Pastries",
    "Party",
    "Nigerian Snacks",
  ],
},

  // ================= DRINKS =================
 {
  id: 23,
  slug: "chocolate-milkshake",
  name: "Chocolate Milkshake",

  description:
    "A rich and creamy chocolate milkshake blended with premium chocolate and fresh dairy for a refreshing treat that's perfect for birthdays, parties, or anytime indulgence.",

  category: "Drinks",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/drink1.webp",

  images: [
    "/drink1.webp",
    "/drink2.jpg",
    "/drink3.jpg",
    "/drink4.jpg",
  ],

  price: 2500,
  oldPrice: 3000,
  discount: 10,

  inStock: true,
  stock: 30,

  featured: true,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 4.9,
  reviews: 36,

  sku: "LC-023",
  brand: "L'Chaim Cakes",

  tags: [
    "Chocolate",
    "Milkshake",
    "Drink",
    "Birthday",
    "Cold Beverage",
  ],
},

{
  id: 24,
  slug: "fresh-fruit-juice",
  name: "Fresh Juice",

  description:
    "Freshly squeezed fruit juice made from seasonal fruits to deliver natural sweetness, refreshing flavour, and essential vitamins for every occasion.",

  category: "Drinks",
  occasion: "Anniversary",
  flavour: "Strawberry",

  image: "/drink2.jpg",

  images: [
    "/drink2.jpg",
    "/drink3.jpg",
    "/drink1.webp",
    "/drink4.jpg",
  ],

  price: 1800,
  oldPrice: 2200,
  discount: 15,

  inStock: true,
  stock: 40,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.7,
  reviews: 21,

  sku: "LC-024",
  brand: "L'Chaim Cakes",

  tags: [
    "Fresh Juice",
    "Fruit Juice",
    "Drink",
    "Strawberry",
    "Healthy",
  ],
},

{
  id: 25,
  slug: "mixed-fruit-smoothie",
  name: "Fruit Smoothie",

  description:
    "A delicious fruit smoothie blended with fresh berries, tropical fruits, and creamy yogurt for a naturally refreshing and nutritious drink.",

  category: "Drinks",
  occasion: "Baby Shower",
  flavour: "Strawberry",

  image: "/drink3.jpg",

  images: [
    "/drink3.jpg",
    "/drink1.webp",
    "/drink2.jpg",
    "/drink4.jpg",
  ],

  price: 3000,
  oldPrice: 3500,
  discount: 14,

  inStock: true,
  stock: 25,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 29,

  sku: "LC-025",
  brand: "L'Chaim Cakes",

  tags: [
    "Smoothie",
    "Fruit",
    "Strawberry",
    "Drink",
    "Healthy",
  ],
},

 {
  id: 26,
  slug: "iced-coffee",
  name: "Iced Coffee",

  description:
    "A refreshing iced coffee made with freshly brewed espresso, creamy milk, and rich caramel syrup. Perfect for hot days, brunches, and afternoon refreshment.",

  category: "Drinks",
  occasion: "Graduation",
  flavour: "Caramel",

  image: "/drink4.jpg",

  images: [
    "/drink4.jpg",
    "/drink3.jpg",
    "/drink2.jpg",
    "/drink1.webp",
  ],

  price: 2800,
  oldPrice: 3200,
  discount: 10,

  inStock: true,
  stock: 25,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 4.8,
  reviews: 19,

  sku: "LC-026",
  brand: "L'Chaim Cakes",

  tags: [
    "Coffee",
    "Iced Coffee",
    "Caramel",
    "Drink",
    "Refreshment",
  ],
},

// ================= FOOD TRAYS =================

{
  id: 27,
  slug: "party-food-tray",
  name: "Party Food Tray",

  description:
    "A delicious assortment of pastries, finger foods, desserts, and savoury treats carefully prepared for weddings, birthdays, and special celebrations.",

  category: "Food Tray",
  occasion: "Wedding",
  flavour: "Vanilla",

  image: "/foodtray1.jpg",

  images: [
    "/foodtray1.jpg",
    "/foodtray2.jpg",
    "/foodtray3.jpg",
    "/foodtray4.jpg",
  ],

  price: 25000,
  oldPrice: 30000,
  discount: 15,

  inStock: true,
  stock: 12,

  featured: true,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 5,
  reviews: 28,

  sku: "LC-027",
  brand: "L'Chaim Cakes",

  tags: [
    "Food Tray",
    "Party",
    "Wedding",
    "Catering",
    "Celebration",
  ],
},

{
  id: 28,
  slug: "family-food-tray",
  name: "Family Food Tray",

  description:
    "A generous family-sized food tray featuring freshly baked pastries, snacks, desserts, and finger foods, perfect for family gatherings and celebrations.",

  category: "Food Tray",
  occasion: "Birthday",
  flavour: "Mixed",

  image: "/foodtray2.jpg",

  images: [
    "/foodtray2.jpg",
    "/foodtray1.jpg",
    "/foodtray3.jpg",
    "/foodtray4.jpg",
  ],

  price: 35000,
  oldPrice: 40000,
  discount: 12,

  inStock: true,
  stock: 8,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 4.9,
  reviews: 17,

  sku: "LC-028",
  brand: "L'Chaim Cakes",

  tags: [
    "Family",
    "Food Tray",
    "Catering",
    "Party",
    "Celebration",
  ],
},

{
  id: 29,
  slug: "premium-food-tray",
  name: "Premium Food Tray",

  description:
    "A carefully curated premium food tray featuring an assortment of delicious pastries, finger foods, and desserts, ideal for weddings, corporate events, and special celebrations.",

  category: "Food Tray",
  occasion: "Wedding",
  flavour: "Chocolate",

  image: "/foodtray3.jpg",

  images: [
    "/foodtray3.jpg",
    "/foodtray1.jpg",
    "/foodtray2.jpg",
    "/foodtray4.jpg",
  ],

  price: 45000,
  oldPrice: 50000,
  discount: 10,

  inStock: true,
  stock: 10,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 4.8,
  reviews: 20,

  sku: "LC-029",
  brand: "L'Chaim Cakes",

  tags: [
    "Food Tray",
    "Wedding",
    "Premium",
    "Catering",
    "Party"
  ],
},

{
  id: 30,
  slug: "executive-food-tray",
  name: "Executive Food Tray",

  description:
    "An executive food tray prepared with premium snacks, desserts, pastries, and finger foods, perfect for corporate meetings, luxury events, and VIP gatherings.",

  category: "Food Tray",
  occasion: "Corporate",
  flavour: "Mixed",

  image: "/foodtray4.jpg",

  images: [
    "/foodtray4.jpg",
    "/foodtray3.jpg",
    "/foodtray2.jpg",
    "/foodtray1.jpg",
  ],

  price: 60000,
  oldPrice: 70000,
  discount: 14,

  inStock: true,
  stock: 6,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 5,
  reviews: 15,

  sku: "LC-030",
  brand: "L'Chaim Cakes",

  tags: [
    "Executive",
    "Food Tray",
    "Corporate",
    "Luxury",
    "Catering"
  ],
},

{
  id: 31,
  slug: "lemon-blackberry-cake",
  name: "Lemon Blackberry Cake",

  description:
    "A refreshing lemon sponge cake layered with blackberry filling and finished with smooth buttercream. A delightful choice for anniversaries and elegant celebrations.",

  category: "Desserts",
  occasion: "Anniversary",
  flavour: "Lemon",

  image: "/dessert3.jpg",

  images: [
    "/dessert3.jpg",
    "/dessert1.jpg",
    "/dessert2.jpg",
    "/dessert4.jpg",
  ],

  price: 6000,
  oldPrice: 7000,
  discount: 14,

  inStock: true,
  stock: 18,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.9,
  reviews: 27,

  sku: "LC-031",
  brand: "L'Chaim Cakes",

  tags: [
    "Lemon",
    "Blackberry",
    "Dessert",
    "Anniversary",
    "Cake"
  ],
},

{
  id: 32,
  slug: "chocolate-ice-cream-delight",
  name: "Chocolate Ice Cream Delight",

  description:
    "Creamy homemade chocolate ice cream crafted with rich cocoa and premium ingredients. A refreshing dessert perfect for birthdays, parties, and everyday indulgence.",

  category: "Desserts",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/dessert4.jpg",

  images: [
    "/dessert4.jpg",
    "/dessert1.jpg",
    "/dessert2.jpg",
    "/dessert3.jpg",
  ],

  price: 5000,
  oldPrice: 6000,
  discount: 14,

  inStock: false,
  stock: 0,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 22,

  sku: "LC-032",
  brand: "L'Chaim Cakes",

  tags: [
    "Ice Cream",
    "Chocolate",
    "Dessert",
    "Birthday",
    "Frozen"
  ],
},

{
  id: 33,
  slug: "pink-velvet-cupcakes",
  name: "Pink Velvet Cupcakes",

  description:
    "Soft and fluffy pink velvet cupcakes topped with smooth buttercream frosting. Perfect for birthdays, baby showers, and elegant celebrations.",

  category: "Desserts",
  occasion: "Birthday",
  flavour: "Strawberry",

  image: "/dessert2.jpg",

  images: [
    "/dessert2.jpg",
    "/dessert4.jpg",
    "/dessert1.jpg",
    "/dessert3.jpg",
  ],

  price: 5000,
  oldPrice: 6000,
  discount: 14,

  inStock: false,
  stock: 0,

  featured: false,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 5,
  reviews: 16,

  sku: "LC-033",
  brand: "L'Chaim Cakes",

  tags: [
    "Cupcakes",
    "Pink Velvet",
    "Strawberry",
    "Birthday",
    "Dessert"
  ],
},

{
  id: 34,
  slug: "dark-chocolate-cherry-cheesecake",
  name: "Dark Chocolate Cherry Cheesecake",

  description:
    "A rich baked cheesecake layered with premium dark chocolate and juicy cherries. An irresistible dessert for chocolate lovers and special occasions.",

  category: "Desserts",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/dessert1.jpg",

  images: [
    "/dessert1.jpg",
    "/dessert3.jpg",
    "/dessert2.jpg",
    "/dessert4.jpg",
  ],

  price: 7000,
  oldPrice: 8000,
  discount: 14,

  inStock: true,
  stock: 15,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: true,

  rating: 5,
  reviews: 31,

  sku: "LC-034",
  brand: "L'Chaim Cakes",

  tags: [
    "Cheesecake",
    "Chocolate",
    "Cherry",
    "Dessert",
    "Luxury"
  ],
},

  // ================= CHILDREN CAKES =================
{
  id: 35,
  slug: "superhero-birthday-cake",
  name: "Superhero Birthday Cake",

  description:
    "An exciting superhero-themed birthday cake designed for young heroes. Decorated with vibrant colors, premium chocolate sponge, and creative superhero-inspired details, making every birthday celebration unforgettable.",

  category: "Children Cakes",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/childcake1.jpg",

  images: [
    "/childcake1.jpg",
    "/childcake2.jpg",
    "/childcake3.webp",
    "/childcake4.jpg",
  ],

  price: 38000,
  oldPrice: 42000,
  discount: 10,

  inStock: true,
  stock: 12,

  featured: true,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: false,

  rating: 4.9,
  reviews: 35,

  sku: "LC-035",
  brand: "L'Chaim Cakes",

  tags: [
    "Children Cake",
    "Birthday Cake",
    "Superhero",
    "Chocolate",
    "Kids Party",
  ],
},
 {
  id: 36,
  slug: "princess-castle-cake",
  name: "Princess Castle Cake",

  description:
    "A beautiful princess-themed castle cake decorated with premium buttercream, perfect for birthdays, princess parties, and magical celebrations.",

  category: "Children Cakes",
  occasion: "Birthday",
  flavour: "Vanilla",

  image: "/childcake2.jpg",

  images: [
    "/childcake2.jpg",
    "/childcake1.jpg",
    "/childcake3.webp",
    "/childcake4.jpg",
  ],

  price: 45000,
  oldPrice: 50000,
  discount: 10,

  inStock: true,
  stock: 8,

  featured: false,
  chefsSelection: false,
  luxuryBakes: true,
  exquisiteTreats: false,

  rating: 5,
  reviews: 18,

  sku: "LC-036",
  brand: "L'Chaim Cakes",

  tags: [
    "Princess",
    "Birthday",
    "Children",
    "Vanilla",
    "Castle"
  ],
},

{
  id: 37,
  slug: "cartoon-character-cake",
  name: "Cartoon Character Cake",

  description:
    "A colourful cartoon-themed birthday cake featuring your child's favourite characters. Designed to make every birthday unforgettable.",

  category: "Children Cakes",
  occasion: "Birthday",
  flavour: "Chocolate",

  image: "/childcake3.webp",

  images: [
    "/childcake3.webp",
    "/childcake2.jpg",
    "/childcake1.jpg",
    "/childcake4.jpg",
  ],

  price: 35000,
  oldPrice: 39000,
  discount: 12,

  inStock: true,
  stock: 12,

  featured: false,
  chefsSelection: false,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 4.8,
  reviews: 24,

  sku: "LC-037",
  brand: "L'Chaim Cakes",

  tags: [
    "Cartoon",
    "Birthday",
    "Chocolate",
    "Children",
    "Party"
  ],
},

{
  id: 38,
  slug: "rainbow-unicorn-cake",
  name: "Rainbow Unicorn Cake",

  description:
    "A vibrant rainbow unicorn cake decorated with colourful buttercream and handcrafted fondant details. A favourite for children's birthdays and themed celebrations.",

  category: "Children Cakes",
  occasion: "Birthday",
  flavour: "Strawberry",

  image: "/childcake4.jpg",

  images: [
    "/childcake4.jpg",
    "/childcake3.webp",
    "/childcake2.jpg",
    "/childcake1.jpg",
  ],

  price: 48000,
  oldPrice: 54000,
  discount: 11,

  inStock: true,
  stock: 6,

  featured: false,
  chefsSelection: true,
  luxuryBakes: false,
  exquisiteTreats: true,

  rating: 5,
  reviews: 31,

  sku: "LC-038",
  brand: "L'Chaim Cakes",

  tags: [
    "Rainbow",
    "Unicorn",
    "Birthday",
    "Strawberry",
    "Children"
  ],
},


];

export default products;