module.exports = function(sequelize, DataTypes) {
    const burger = sequelize.define("burger", {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      burger_name: DataTypes.STRING,
      devoured: { type: DataTypes.BOOLEAN,defaultValue: false}
  }, {
      freezeTableName: true
  }
  )
    return burger;
  };