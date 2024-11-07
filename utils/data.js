const yearArray = [];

for (let year = 1970; year <= 2024; year++) {
  yearArray.push(year);
}

const months = [
  { value: "1", month: "January" },
  { value: "2", month: "February" },
  { value: "3", month: "March" },
  { value: "4", month: "April" },
  { value: "5", month: "May" },
  { value: "6", month: "June" },
  { value: "7", month: "July" },
  { value: "8", month: "August" },
  { value: "9", month: "September" },
  { value: "10", month: "October" },
  { value: "11", month: "November" },
  { value: "12", month: "December" },
];

const productsData = [
  {
    id: 1,
    name: "Moisturizer",
    imageUrl: "/products/product1.jpg",
    description:
      "This is a good mosturizer for all aged people. This is used in winter specially",
    price: "5000",
  },
  {
    id: 2,
    name: "Mirrorless Camera",
    imageUrl: "/products/product2.jpg",
    description:
      "High Defination Camera with extra Lense. Good For Low Light Photograph as well. Two years warenty",
    price: "25000",
  },
  {
    id: 3,
    name: "Wrist Watch",
    imageUrl: "/products/product3.jpg",
    description:
      "Luxary watch for men. Run in Solar system . 5 Years replace garenty",
    price: "50000",
  },
  {
    id: 4,
    name: "Perfume",
    imageUrl: "/products/product4.jpg",
    description:
      "This is luxary purfume from Paris. This is renouned in worldwide for it's haritage",
    price: "3500",
  },
];

export { months, productsData, yearArray };
