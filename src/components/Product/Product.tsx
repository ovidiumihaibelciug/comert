import Button from "../Button";
import "./Product.styles.scss";

interface ProductProps {
  id: string;
  name: string;
  image?: string;
  price?: number;
  onClick?: () => void;
}

const Product: React.FC<ProductProps> = ({
  name = "",
  image,
  id = "",
  price = 0,
  onClick = () => {},
}) => {
  return (
    <div className="product" onClick={onClick}>
      <div className="product__image">
        <img src={image} alt="cover" />
      </div>
      <div className="product__details">
        <div className="product__name">{name}</div>
        <div className="product__price">{price} lei</div>
        <Button className="product__pay">Cumpara</Button>
      </div>
    </div>
  );
};

export default Product;
