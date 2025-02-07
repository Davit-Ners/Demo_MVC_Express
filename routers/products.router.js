import { Router } from 'express';
import productsController from '../controllers/products.controllers.js';

const productsRouter = Router();

productsRouter.get('/products', productsController.index);
productsRouter.get('/products/details/:id', productsController.detail);
productsRouter.get('/products/add', productsController.add);

export default productsRouter;