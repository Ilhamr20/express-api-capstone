import express from "express";
import authRouter from "./auth.js";
import inventoryRouter from "./inventoryRoutes.js";
import ingredientRouter from "./ingredient.js";

const router = express();

router.use("/api", authRouter);
router.use("/api", inventoryRouter);
router.use("/api", ingredientRouter);

export default router;
