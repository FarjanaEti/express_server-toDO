import express from "express"
import { userCollector } from "./user.controller";
import auth from "../../middleware/auth";
const router=express.Router();

router.post('/',userCollector.createUser)
router.get('/',auth(),userCollector.getUser)
router.get('/:id',userCollector.getSingleUser)
router.put("/:id", userCollector.updateUser);
router.delete("/:id", userCollector.deleteUser);

export const userRouter=router;
