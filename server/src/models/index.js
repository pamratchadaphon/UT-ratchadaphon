const dbConfig = require("../config/dbConfig");
const { Sequelize} = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => console.log("connected!"))
  .catch((err) => console.log("Error :" + err));


const db = {};
db.Farmer = require("./FarmerModel")(sequelize, Sequelize);
db.RiceCaltivation = require("./RiceCultivationModel")(sequelize, Sequelize);
db.IncomeExpense = require("./IncomeExpenseModel")(sequelize, Sequelize);
db.RiceVariety = require("./RiceVarietyModel")(sequelize, Sequelize);
db.NewsService = require('./NewsServicesModel')(sequelize, Sequelize)

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Farmer.hasMany(db.RiceCaltivation, {
  foreignKey: 'farmer_id',
  as: 'riceCaltivation'
})

db.RiceCaltivation.belongsTo(db.Farmer, {
  foreignKey: 'farmer_id',
  as: 'farmer'
})

db.Farmer.hasMany(db.IncomeExpense, {
  foreignKey: 'farmer_id',
  as: 'incomeExpense'
})
db.IncomeExpense.belongsTo(db.Farmer, {
  foreignKey: 'farmer_id',
  as: 'farmer'
})

db.RiceCaltivation.hasMany(db.IncomeExpense, {
  foreignKey: 'riceCaltivation_id',
  as: 'incomeExpense'
})
db.IncomeExpense.belongsTo(db.RiceCaltivation, {
  foreignKey: 'riceCaltivation_id',
  as: 'riceCaltivation'
})

module.exports = db;