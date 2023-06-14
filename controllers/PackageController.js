const mongoose = require('mongoose');

const Package = require('../models/Package')

const getAll = async (req, res, next) => {
    try {
        var data = await Model.find();

        await res.status(200).json({
            message: "Success get all data",
            data: data
        });
    } catch (error) {
        await res.status(500).json({
            message: "Package not found",
            data: []
        })
    }
}

const getAllById = async (req, res, next) => {
    try {
        const packageId = new mongoose.Types.ObjectId(req.params.id);

        var data = await Package.findOne({ _id: packageId });

        await res.status(200).json({
            message: "Success get data by id",
            data: data
        });
    } catch (error) {
        await res.status(500).json({
            message: "Package not found",
            data: []
        })
    }
}

module.exports = {
    getAll,
    getAllById
}