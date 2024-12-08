import Inventory from "../models/inventoryModel.js";
import validate from "../utils/validate.js";

// Mendapatkan semua data inventory

class InventoryController {
  async index(req, res) {
    try {
      console.log("processing");

      const inventories = await Inventory.findAll();
      console.log("finish");

      return res.status(200).json(inventories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async store(req, res) {
    try {
      const { isValid, errors } = validate(req.body, {
        user_id_user: {
          check: (value) => typeof value === "number" && value >= 0,
          message: "user_id_user",
        },
        ingredient_id_ingredient: {
          check: (value) => typeof value === "number" && value >= 0,
          message: "ingredient_id_ingredient",
        },
        ingredients_pic: {
          check: (value) => typeof value === "string" && value.trim() !== "",
          message: "ingredient_pic",
        },
        buy_date: {
          check: (value) => !isNaN(Date.parse(value)),
          message: "buy_date",
        },
        stock: {
          check: (value) => typeof value === "number" && value >= 0,
          message: "stock",
        },
        unit: {
          check: (value) => typeof value === "string" && value.trim() !== "",
          message: "unit",
        },
        place: {
          check: (value) => typeof value === "string" && value.trim() !== "",
          message: "place",
        },
        expiry_date: {
          check: (value) => !isNaN(Date.parse(value)),
          message: "expiry_date",
        },
      });

      if (!isValid) {
        return res
          .status(400)
          .json({ message: `Invalid or mising field ${errors.join(", ")}` });
      }

      await Inventory.create(req.body);

      return res.status(201).json({ message: "inserted data successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "inserted data failed" });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const inventory = await Inventory.findOne({
        where: {
          id_inventory: id,
        },
      });

      return res.status(200).json(inventory);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "failed fetch" });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      const { isValid, errors } = validate(req.body, {
        user_id_user: {
          check: (value) => typeof value === "number" && value >= 0,
          message: "user_id_user",
        },
        ingredient_id_ingredient: {
          check: (value) => typeof value === "number" && value >= 0,
          message: "ingredient_id_ingredient",
        },
        ingredients_pic: {
          check: (value) => typeof value === "string" && value.trim() !== "",
          message: "ingredient_pic",
        },
        buy_date: {
          check: (value) => !isNaN(Date.parse(value)),
          message: "buy_date",
        },
        stock: {
          check: (value) => typeof value === "number" && value >= 0,
          message: "stock",
        },
        unit: {
          check: (value) => typeof value === "string" && value.trim() !== "",
          message: "unit",
        },
        place: {
          check: (value) => typeof value === "string" && value.trim() !== "",
          message: "place",
        },
        expiry_date: {
          check: (value) => !isNaN(Date.parse(value)),
          message: "expiry_date",
        },
      });

      if (!isValid) {
        return res
          .status(400)
          .json({ message: `Invalid or mising field ${errors.join(", ")}` });
      }

      await Inventory.update(req.body, {
        where: {
          id_inventory: id,
        },
      });

      return res.status(200).json({ message: "update ok" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "update failed" });
    }
  }

  async destroy(req, res) {
    try {
      const id = req.params.id;

      const exitingItem = await Inventory.findOne({
        where: {
          id_inventory: id,
        },
      });

      if (!exitingItem) {
        return res.status(404).json({ message: "item not found" });
      }

      await Inventory.destroy({
        where: {
          id_inventory: id,
        },
      });

      return res.status(200).json({ message: "deleted successfully" });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "deleted failed" });
    }
  }
}

export default new InventoryController();
