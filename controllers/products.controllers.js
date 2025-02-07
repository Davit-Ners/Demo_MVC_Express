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
        const product = productModel.getById(Number(req.params.id));
        res.render('products/detail', { product });
    },

    /**
     * add
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    add: (req, res) => {
        res.render('products/add', {  });
    }

};

export default productsController;