module.exports = (sequelize, DataTypes) => {
  const RiceVariety = sequelize.define("RiceVariety", {
    riceVariety_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    softness: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sensitivity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    water_requirement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    growth_period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yield_variety: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    selling_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return RiceVariety;
};
