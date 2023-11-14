import { ShoppingCartItems } from "../types/types";
import { addToCart } from "../utilities/addToCart";
import { useEffect, useState } from "react";

const RenderCart = () => {
    const [cartProducts, setCartProducts] = useState<ShoppingCartItems[]>([]);
    const url = '../src/assets/images/';


    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        const parsedCart: ShoppingCartItems[] = cartData ? JSON.parse(cartData) : [];
        setCartProducts(parsedCart);
    }, []);

    const handleAddToCart = (product: ShoppingCartItems, increase: boolean) => {
        const updatedCart = addToCart(product, increase);
        setCartProducts(updatedCart);
    };

    return (
        <div>
            <h3>Din varukorg</h3>
            {cartProducts.map((product) => {
                return (
                    <div key={product.id}>
                        <img src={url + product.imgUrl} alt="" />
                        <p>{product.name} - {product.price} kr</p>
                        <button onClick={() => handleAddToCart(product, true)}>+</button>
                        <p>Antal {product.quantity}</p> 
                        <button onClick={() => handleAddToCart(product, false)}>-</button>
                    </div> 
                )
            })}
        </div>
        
    )
}

export default RenderCart;