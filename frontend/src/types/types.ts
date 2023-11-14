export interface Product {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    lagersaldo: number;
    description: string;
}

export interface ShoppingCartItems extends Product{
    quantity: number; 
}