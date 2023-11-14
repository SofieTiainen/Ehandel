import './renderProducts.css'
import { Product } from "../types/types"
import { fetchData } from "../utilities/httpClient"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const RenderProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const url = '../src/assets/images/';

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/api/products';
    
        fetchData<Product[]>(apiUrl)
            .then((result) => setProducts(result.data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);


    return (  
        <div className="products-wrapper">
            <ul className="product-card-wrapper">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="product-card">
                            <Link to={`/HollyJollyHaven/product/${product.id}`}>
                            <img src={url + product.imgUrl} alt={product.name} />
                            <li>{product.name} - {product.price} kr</li>
                            </Link>
                        </div>
                    )
                })}
            </ul>
        </div>
    )    
}

export default RenderProducts;