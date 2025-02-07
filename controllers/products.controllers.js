import express from 'express';
import productModel from '../models/product.js';
const productsController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        const products = productModel.getAll();
        res.render('products/index', { products });
    },

    /**
     * detail
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    detail: (req, res) => {
        console.log(req.params.id);
        res.render('products/detail');
    }

};

export default productsController;