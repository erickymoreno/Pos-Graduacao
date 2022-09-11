import {Router} from "express";
import { CreateUserController } from "../controllers/createUserController";
import { CreatePostController } from "../controllers/createPostController";
import { createProfileController } from "../controllers/createProfileController";



const router = Router();

const createUser = new CreateUserController();
const createPost = new CreatePostController();
const createProfile = new createProfileController();

router.post("/user", createUser.handle);
router.post("/post", createPost.handle);
router.post("/profile", createProfile.handle);

export { router };