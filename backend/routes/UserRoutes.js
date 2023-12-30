import express from "express";
import { login, authUser, logoutUser } from "../controllers/UserController.js";
const router = express.Router();

router.route("/auth").post(authUser).get(authUser);
router.route("/login").post(login).get(login);
router.post("/logout", logoutUser);
export default router;