import express from "express"
import { userCollector } from "./user.controller";
const router=express.Router();

router.post('/',userCollector.createUser)
router.get('/',userCollector.getUser)
router.get('/:id',userCollector.getSingleUser)
router.put("/:id", userCollector.updateUser);
router.delete("/:id", userCollector.deleteUser);

export const userRouter=router;
