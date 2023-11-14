import { useEffect, useState } from "react";
import { fetchData } from "../utilities/httpClient";
import { addToCart } from "../utilities/addToCart";
import { Product } from "../types/types";


const ProductDetail = ({ productId }: { productId: number }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const url = '../src/assets/images/';

  useEffect(() => {
    const apiUrl = `http://localhost:3000/api/products/${productId}`;

    fetchData<Product>(apiUrl)
    .then((result) => {
        const productData = Array.isArray(result.data) && result.data.length > 0 ? result.data[0] : null;
        setProduct(productData)
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, [product]);


  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div>
      <h3>Produkt</h3>
        <img src={url + product.imgUrl} alt={product.name} />
        <h3>{product.name} - {product.price} kr</h3>
        <p><strong>Beskrivning av produkt:  </strong>{product.description}</p>
        <p><strong>Antal i lager: </strong>{product.lagersaldo} st</p>
        <button onClick={handleAddToCart}>Lägg till i varukorgen</button>
    </div>
  );
};

export default ProductDetail;
