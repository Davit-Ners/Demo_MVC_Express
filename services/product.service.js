import productModel from "../models/product.js";


const productService = {

    getAll: () => {
        const product = productModel.getAll()
                                    .map(p => ({
                                        id: p.id,
                                        name: p.name,
                                        price: p.soldePrice ?? p.price
                                    }));

        return product;
    },

};

export default productService;