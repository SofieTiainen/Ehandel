import { test, expect } from 'vitest';
import { addToCart } from '../src/utilities/addToCart';

const mockProduct = {
    id: 1,
    name: 'Mock Product',
    price: 200,
    imgUrl: 'blabla.png',
    lagersaldo: 200,
    description: 'blabla',
};


const mockLocalStorage = {
    getItem: () => '[]',
    setItem: (key: string, value: string) => {
    },
};

(global as any).localStorage = mockLocalStorage;


test('checks if addToCart function contains the word "cart"', () => {
    const addToCartFunctionAsString = addToCart.toString();

    expect(addToCartFunctionAsString).toContain('cart');
});


test('removes product from cart when quantity reaches 0', () => {
    const result = addToCart(mockProduct, false);

    expect(result.find(item => item.id === mockProduct.id)).toBeUndefined();
});
