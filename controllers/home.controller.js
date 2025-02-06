import express from 'express';
const homeController = {

    /**
     * Index
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    index: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * About
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    about: (req, res) => {
        res.sendStatus(501);
    }


};

export default homeController;