import Navbar from "./components/Navbar";
import { NAVBAR_ITEMS, PRODUCTS } from "./utils";
import { useState } from "react";
import Product from "./components/Product";
import { Product as ProductType } from "./components/Product/types";
import { ToastContainer, toast } from "react-toastify";

import "./App.styles.scss";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartProducts, setCartProducts] = useState<string[]>([]);

  const handleAddToCart = (id: string) => {
    const newCartProducts = [...cartProducts];

    const product = PRODUCTS.find((product) => product.id === id);

    newCartProducts.push(id);

    setCartProducts(newCartProducts);

    toast.success(`${product?.name} a fost adaugat in cos`, {
      position: "top-left",
    });
  };

  const handleRemoveCartProduct = (index: number) => {
    setCartProducts((cartProducts) => [
      ...cartProducts.slice(0, index),
      ...cartProducts.slice(index + 1),
    ]);
  };

  const fullCartProducts = cartProducts
    .map((id) => {
      return PRODUCTS.find((product) => product.id === id);
    })
    .filter(Boolean);

  const total = fullCartProducts.reduce((acc, cV) => acc + cV?.price!, 0);

  const handlePay = () => {
    if (total < 50) {
      toast.error(`Totalul trebuie a fie mai mare decat 50!`, {
        position: "top-left",
      });
    } else {
      toast.success(`Produsele in valoare de ${total} lei au fost cumparate!`, {
        position: "top-left",
      });

      setCartProducts([]);
    }
  };

  return (
    <div className="app">
      <ToastContainer />
      <Navbar
        links={NAVBAR_ITEMS}
        cartProductsCount={cartProducts.length || 0}
        total={total}
        // @ts-ignore
        cartProducts={fullCartProducts || []}
        onRemoveCartProduct={handleRemoveCartProduct}
        onPay={handlePay}
      />
      <main className="app__main">
        <h1>Magazin online</h1>
        <p className="app__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          laborum, odit ipsam aliquid quis, quo cum harum minima exercitationem
          fugiat quam expedita, dolore odio illo nemo excepturi? Deleniti,
          doloremque quos.
        </p>
        <p className="app__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          laborum, odit ipsam aliquid quis, quo cum harum minima exercitationem
          fugiat quam expedita, dolore odio illo nemo excepturi? Deleniti,
          doloremque quos.
        </p>

        <div className="app__products">
          {PRODUCTS.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                image={product?.image}
                name={product.name}
                price={product.price}
                onClick={() => {
                  handleAddToCart(product.id);
                }}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
