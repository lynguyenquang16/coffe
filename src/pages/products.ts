export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Bakari Product",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img4.jpg",
    category: "Chair",
    description: "Hương vị đậm đà, hạt cà phê tuyển chọn từ vùng cao nguyên...",
  },
  {
    id: 2,
    name: "Romada Product",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img5.jpg",
    category: "Cloths",
    description: "Sự kết hợp hoàn hảo giữa Robusta và Arabica...",
  },
  {
    id: 3,
    name: "Sikkar Product",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img6.jpg",
    category: "Light",
    description: "Cà phê nhẹ nhàng, phù hợp cho phái nữ...",
  },
  {
    id: 4,
    name: "Minners Product",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img7.jpg",
    category: "Headphone",
    description: "Đậm chất espresso Ý truyền thống...",
  },
  {
    id: 5,
    name: "Dolando Product",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img8.jpg",
    category: "Table",
  },
  {
    id: 6,
    name: "Romada Product 2",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img9.jpg",
    category: "Cloths",
  },
  {
    id: 7,
    name: "Medidove Product",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img1.jpg",
    category: "Cloths",
  },
  {
    id: 8,
    name: "Legend Product",
    price: 95,
    oldPrice: 120,
    image: "/img/shop/img2.jpg",
    category: "Cloths",
  },
];
