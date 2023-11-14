import { useParams } from "react-router-dom";
import ProductDetail from "../features/ProductDetail";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";

const SpecificProduct = () => {
  
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "", 10)
    

  return (
    <div>
      <Header />
      <Link to={'/HollyJollyHaven/cart'}>Varukorg</Link>
      <ProductDetail productId={productId} />
    </div>
  );
};

export default SpecificProduct;
