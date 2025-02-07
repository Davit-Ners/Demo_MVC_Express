import { Router } from 'express';
import productsController from '../controllers/products.controllers.js';

const productsRouter = Router();

productsRouter.get('/product/index', productsController.index);

export default productsRouter;