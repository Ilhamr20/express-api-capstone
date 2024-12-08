import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Ingredient = sequelize.define("Ingredient", {
  ingredient_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ingredient_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default Ingredient;
