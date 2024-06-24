const db = require("../models");
const RiceCaltivation = db.RiceCaltivation;

module.exports = {
  async create(req, res) {
    const riceCaltivation = await RiceCaltivation.create(req.body);
    res.status(201).send(riceCaltivation);
  },
  async index(req, res) {
    const riceCaltivation = await RiceCaltivation.findAll({
      include: [
        {
          model: db.Farmer,
          as: "farmer",
        },
      ],
    });
    res.status(200).send(riceCaltivation);
  },
  async show(req, res) {
    const riceCaltivation = await RiceCaltivation.findOne({
      where: { riceCaltivation_id: req.params.riceCaltivation_id },
    });
    res.status(200).send(riceCaltivation);
  },
  async update(req, res) {
    await RiceCaltivation.update(req.body, {
      where: { riceCaltivation_id: req.params.riceCaltivation_id },
    });
    res.status(200).send(req.body);
  },
  async delete(req, res) {
    await RiceCaltivation.destroy({
      where: { riceCaltivation_id: req.params.riceCaltivation_id },
    });
    res.status(200).send("ricecaltivation is deleted!");
  },
  async incomeExpense(req, res) {
    const data = await RiceCaltivation.findAll({
      include: [
        {
          model: db.IncomeExpense,
          as: "incomeExpense",
        },
      ],
      where: { riceCaltivation_id: req.params.riceCaltivation_id },
    });
    res.status(200).send(data);
  },
  async farmer(req, res) {
    const riceCaltivation = await RiceCaltivation.findAll({
      include: [
        {
          model: db.Farmer,
          as: "farmer",
        },
      ],
    });
    res.status(200).send(riceCaltivation);
  },
};
