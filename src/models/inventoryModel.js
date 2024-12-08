import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js"; // Jika diperlukan relasi dengan model User
import Ingredient from "./ingredient.js";

const Inventory = sequelize.define(
  "Inventory",
  {
    id_inventory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
      allowNull: false,
    },
    ingredient_id_ingredient: {
      type: DataTypes.INTEGER,
      references: {
        model: Ingredient,
        key: "ingredient_id",
      },
      allowNull: false,
    },
    ingredients_pic: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    buy_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    place: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "inventory",
    timestamps: false,
  }
);

// Definisikan relasi jika diperlukan
Inventory.belongsTo(User, { foreignKey: "user_id_user" });
Inventory.belongsTo(Ingredient, { foreignKey: "ingredient_id_ingredient" });

export default Inventory;
