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
        const title ='About';
        const cssList = {name: 'about'};
        console.log(cssList);
        res.render('home/about', { title, cssList });
    }
    


};

export default homeController;