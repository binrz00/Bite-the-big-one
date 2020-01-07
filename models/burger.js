const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");
const burger = sequelize.define("burger", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    burger_name: Sequelize.STRING,
    devoured: { type: Sequelize.BOOLEAN,defaultValue: false}
}, {
    freezeTableName: true
}
)
//sync the department model with the employees database
burger.sync();

module.exports = burger;
