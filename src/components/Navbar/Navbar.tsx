import logo from "../../logo.svg";
import { NavbarItem } from "./types";

import "./Navbar.styles.scss";
import { Product } from "../Product/types";
import Button from "../Button";
import { useMemo } from "react";

interface NavbarProps {
  links?: NavbarItem[];
  cartProductsCount: number;
  cartProducts: Product[];
  total: number;
  onRemoveCartProduct: (key: number) => void;
  onPay: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  links = [],
  cartProductsCount = 0,
  cartProducts = [],
  onRemoveCartProduct = () => {},
  onPay = () => {},
  total = 0,
}) => {
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__right-side">
          <div className="navbar__links">
            {links.map((item, key) => {
              return (
                <div className="navbar__link" key={key}>
                  <a href={item.link}>{item.title}</a>
                </div>
              );
            })}
          </div>
          <div className="navbar__cart">
            <span>
              Cart{cartProductsCount > 0 && <>({cartProductsCount})</>}
            </span>
            <div className="navbar__cart__dropdown">
              <div className="navbar__cart__dropdown__items">
                {cartProducts.map((product, key) => {
                  return (
                    <div className="navbar__cart__dropdown__item">
                      {product.name} - {product.price}{" "}
                      <span
                        onClick={() => {
                          onRemoveCartProduct(key);
                        }}
                      >
                        X
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="navbar__cart__dropdown__pay">
                <Button onClick={onPay}>Pay {total}</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
