import express from "express"
import { userCollector } from "./user.controller";
const router=express.Router();

router.post('/',userCollector.createUser)
router.get('/',userCollector.getUser)

export const userRouter=router;
