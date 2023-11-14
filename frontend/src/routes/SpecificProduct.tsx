import { useParams } from "react-router-dom";
import ProductDetail from "../features/ProductDetail";

const SpecificProduct = () => {
  
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "", 10)
    

  return (
    <div>
        <ProductDetail productId={productId} />
    </div>
  );
};

export default SpecificProduct;
