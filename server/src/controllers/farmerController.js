const db = require("../models");
const Farmer = db.Farmer;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const secret = "Login-WebApp";

module.exports = {
  async register(req, res) {
    try {
      const farmer = await Farmer.findOne({ where: { email: req.body.email } });
      if (farmer) {
        return res
          .status(404)
          .json({ status: "error", error: "Email already exists" });
      }
      const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
      const newFarmer = await Farmer.create({
        email: req.body.email,
        password: hashPassword,
        phone: req.body.phone,
        fname: req.body.fname,
        lname: req.body.lname,
        subdistrict: req.body.subdistrict,
        district: req.body.district,
        province: req.body.province,
      });
      res.status(201).send(newFarmer);
    } catch (error) {
      res.status(404).json({ status: "error", error: "Email already exists" });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;
    const farmer = await Farmer.findOne({ where: { email } });
    if (!farmer) {
      return res
        .status(404)
        .json({ status: "error", error: "Farmer not found" });
    }
    const match = await bcrypt.compare(password, farmer.password);
    if (!match) {
      return res
        .status(401)
        .json({ status: "error", error: "Incorrect password" });
    }
    const token = jwt.sign(
      { farmer_id: farmer.farmer_id, email: farmer.email },
      secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      status: "ok",
      farmer_id: farmer.farmer_id,
      role: farmer.role,
      token,
    });
  },
  async authen(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      var decoded = jwt.verify(token, secret);
      res.json({ status: "ok", decoded });
    } catch (err) {
      res.json({ status: "error", messsge: err.massage });
    }
  },
  async index(req, res) {
    const farmer = await Farmer.findAll();
    res.status(200).send(farmer);
  },
  async show(req, res) {
    const farmer = await Farmer.findOne({
      where: { farmer_id: req.params.farmer_id },
    });
    res.status(200).send(farmer);
  },
  async update(req, res) {
    const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newFarmer = await Farmer.update(
      {
        email: req.body.email,
        password: hashPassword,
        phone: req.body.phone,
        fname: req.body.fname,
        lname: req.body.lname,
        subdistrict: req.body.subdistrict,
        district: req.body.district,
        province: req.body.province,
      },
      { where: { farmer_id: req.params.farmer_id } }
    );
    res.status(200).send(newFarmer);
  },
  async edit(req, res) {
    const data = await Farmer.update(req.body, {
      where: { farmer_id: req.params.farmer_id },
    });
    res.status(200).send(req.body);
  },
  async delete(req, res) {
    await Farmer.destroy({ where: { farmer_id: req.params.farmer_id } });
    res.status(200).send("farmer is deleted!");
  },
  async riceCaltivation_incomeExpense(req, res) {
    const data = await Farmer.findAll({
      include: [
        {
          model: db.RiceCaltivation,
          as: "riceCaltivation",
        },
        {
          model: db.IncomeExpense,
          as: "incomeExpense",
        },
      ],
      where: { farmer_id: req.params.farmer_id },
    });
    res.status(200).send(data);
  },
};
