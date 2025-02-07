import express from 'express';
const homeController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.render('home/index');
    },

    /**
     * About
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    about: (req, res) => {
        res.render('home/about');
    }


};

export default homeController;