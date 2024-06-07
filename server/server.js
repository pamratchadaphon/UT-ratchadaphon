const express = require("express");

const { sequelize } = require("./src/models");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const app = express();

app.use(express.json());
app.use(cors());

const routeFarmer = require('./src/routes/farmerRoute')
app.use('/farmer', routeFarmer)

const routeRiceVariety = require('./src/routes/riceVarietyRoute')
app.use('/riceVariety', routeRiceVariety)

const routeRiceCaltivation = require('./src/routes/riceCaltivationRoute')
app.use('/riceCaltivation', routeRiceCaltivation)

const routerIncomeExpense = require('./src/routes/incomeExpenseRoute');
app.use('/incomeExpense', routerIncomeExpense)

app.use('/Images', express.static('./Images'))

const port = 8080;

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log("server running on port " + port);
  });
});
