import { test, expect } from 'vitest';
import ProductDetail from '../src/features/ProductDetail';

test('checks if addToCart function contains the word "Lägg till i varukorg"', () => {
    const addToCartFunctionAsString = ProductDetail.toString();
    expect(addToCartFunctionAsString).toContain('Lägg till i varukorg');
});
