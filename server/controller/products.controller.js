import Product from "../models/product-schema.js";

const getProduct =async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

export default getProduct;