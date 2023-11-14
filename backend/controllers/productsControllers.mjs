import products from "../mockdata/products.mjs";

export const getAllProducts = (req, res) => {
    res.json(products);
};

export const getProductById = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((product) => product.id === productId);
    product ? res.json(product) : res.status(404).json({ error: "Product not found" });
};
