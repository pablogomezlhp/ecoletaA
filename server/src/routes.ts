import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';   


import ItemsController from './controllers/ItemsController';

import PointsController from './controllers/PointsController'

const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index);


routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index); 
routes.get('/points/:id',upload.single('image'), pointsController.show);





export default routes