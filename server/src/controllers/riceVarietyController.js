const db = require("../models");
const multer = require("multer");
const path = require("path")

const RiceVariety = db.RiceVariety;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/
    const mimeType = fileTypes.test(file.mimetype)
    const extname = fileTypes.test(path.extname(file.originalname))

    if (mimeType && extname) {
      return cb(null, true)
    }
    cb('Give proper files formate to upload')
  }
}).single('image')

module.exports = {
  async create(req, res) {
    const info = {
      softness: req.body.softness,
      sensitivity: req.body.sensitivity,
      water_requirement: req.body.water_requirement,
      growth_period: req.body.growth_period,
      yield_variety: req.body.yield_variety,
      selling_price: req.body.selling_price,
      image: req.file.path
    }
    const newRiceVariety = await RiceVariety.create(info);
    res.status(201).send(newRiceVariety);
  },
  async index(req, res) {
    const riceVariety = await RiceVariety.findAll();
    res.status(200).send(riceVariety);
  },
  async show(req, res) {
    const riceVariety = await RiceVariety.findOne({
      where: { riceVariety_id: req.params.riceVariety_id },
    });
    res.status(200).send(riceVariety);
  },
  async update(req,res) {
    await RiceVariety.update(req.body, {where: {riceVariety_id: req.params.riceVariety_id}})
    res.status(200).send(req.body)
  },
  async delete(req,res) {
    await RiceVariety.destroy({ where: {riceVariety_id: req.params.riceVariety_id}})
    res.status(200).send("ricecrop is deleted!")
  },
  upload
};
