import express from 'express';
const productsController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.render('products/index');
    }

};

export default productsController;