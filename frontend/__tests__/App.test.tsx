import { render, screen } from '@testing-library/react';
import RenderCart from '../src/features/RenderCart';
import { addToCart } from '../src/utilities/addToCart';
import '@testing-library/jest-dom'


/*Test för RenderCart.tsx*/
test("ProductDetail component should have a heading 'Din varukorg'", () => {
  render(<RenderCart />);
  const heading = screen.getByRole('heading', { name: 'Din varukorg' });
  expect(heading).toBeInTheDocument();
});

/*Test för addToCart.ts*/
describe('addToCart function', () => {
    beforeEach(() => {
      localStorage.clear();
    });
  
    test('Add product to cart', () => {
      const mockProduct = {
        id: 1,
        name: 'Example Product',
        price: 10,
        imgUrl: 'blabla.jpg',
        lagersaldo: 100,
        description: "lorem ipsun"
      };
  

      addToCart(mockProduct);
  
  
      const cartFromStorage = JSON.parse(localStorage.getItem('cart') || '[]');

      expect(cartFromStorage).toHaveLength(1);
      expect(cartFromStorage[0].id).toBe(mockProduct.id);
      expect(cartFromStorage[0].quantity).toBe(1);

    });
  
});