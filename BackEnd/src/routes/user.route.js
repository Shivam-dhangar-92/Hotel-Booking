import { Router } from "express";

import { registerUser , loginUser } from "../controllers/user.controller";

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)    