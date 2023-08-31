import express from "express";
const router = express.Router();
import { userSignup , userLogin} from "../controller/user-controller.js";
import getProduct from "../controller/products.controller.js";

router.post('/signup/',userSignup);
router.post('/login/',userLogin);

router.get('/products', getProduct);

export default router;