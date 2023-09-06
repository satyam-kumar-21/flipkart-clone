import express from "express";
const router = express.Router();
import { userSignup , userLogin} from "../controller/user-controller.js";
import {getProduct, getProductById} from "../controller/products.controller.js";

router.post('/signup/',userSignup);
router.post('/login/',userLogin);

router.get('/products', getProduct);
router.get('/product/:id', getProductById);

export default router;