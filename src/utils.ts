import { NavbarItem } from "./components/Navbar/types";
import { Product } from "./components/Product/types";

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Link 2",
    link: "/link2",
  },
];

export const PRODUCTS: Product[] = new Array(10).fill(0).map((item, key) => {
  return {
    id: key.toString(),
    name: `Produs ${key + 1}`,
    image:
      "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 10 + key * 2,
  };
});
