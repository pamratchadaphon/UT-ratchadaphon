const db = require("../models");
const IncomeExpense = db.IncomeExpense;
const Farmer = db.Farmer;
const RiceCaltivation = db.RiceCaltivation;

module.exports = {
  async create(req, res) {
    try {
      const incomeExpense = await IncomeExpense.create(req.body);
    res.status(201).send(incomeExpense);
    } catch (error) {
      res.status(400).json({status: 'error', error: error})
    }
  },
  async index(req, res) {
    const incomeExpense = await IncomeExpense.findAll({
      include: [
        {
          model: db.Farmer,
          as: "farmer",
        },
      ],
    });
    res.status(200).send(incomeExpense);
  },
  async show(req, res) {
    const incomeExpense = await IncomeExpense.findOne({
      where: { income_expense_id: req.params.income_expense_id },
    });
    res.status(200).send(incomeExpense);
  },
  async update(req, res) {
    await IncomeExpense.update(req.body, {
      where: { income_expense_id: req.params.income_expense_id },
    });
    res.status(200).send(req.body);
  },
  async delete(req, res) {
    await IncomeExpense.destroy({
      where: { income_expense_id: req.params.income_expense_id },
    });
    res.status(200).send("incomeexpense is deleted!");
  },
  async farmer(req, res) {
    const incomeExpense = await IncomeExpense.findAll({
      include: [
        {
          model: db.Farmer,
          as: "farmer",
        },
      ],
      where: { income_expense_id: req.params.income_expense_id },
    });
    res.status(200).send(incomeExpense);
  },
};
