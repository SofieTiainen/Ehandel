import { Product } from "../types/types";
import { ShoppingCartItems } from "../types/types";

const addToCart = (product: Product, increase: boolean = true) => {
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]') as ShoppingCartItems[];
    
    const existingItem = currentCart.find(item => item.id === product.id);


    if (existingItem) {
        existingItem.quantity += increase ? 1 : -1;
        if (existingItem.quantity === 0) {
            const index = currentCart.indexOf(existingItem);
            if (index !== -1) {
                currentCart.splice(index, 1);
            }
        }
    } else if (increase) {
        const newItem: ShoppingCartItems = {
            ...product,
            quantity: 1,
        };
        currentCart.push(newItem);
    }


    localStorage.setItem('cart', JSON.stringify(currentCart));

    return currentCart;
}

export { addToCart };

