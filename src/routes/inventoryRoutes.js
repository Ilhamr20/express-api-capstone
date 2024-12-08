import express from "express";
import InverntoryController from "../controllers/inventoryController.js";

const inventoryRouter = express.Router();

// Rute untuk mendapatkan semua data inventory
inventoryRouter.get("/inventory", InverntoryController.index);

inventoryRouter.get("/inventory/:id", InverntoryController.show);

// // Rute untuk menambahkan data inventory baru
inventoryRouter.post("/inventory", InverntoryController.store);

// // Rute untuk mengupdate data inventory berdasarkan id
inventoryRouter.put("/inventory/:id", InverntoryController.update);

// // Rute untuk menghapus data inventory berdasarkan id
inventoryRouter.delete("/inventory/:id", InverntoryController.destroy);

export default inventoryRouter;
