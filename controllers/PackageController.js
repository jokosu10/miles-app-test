const mongoose = require('mongoose');

const Package = require('../models/Package')

// const circularReplacer = () => {
//     const seen = new WeakSet();
//     return (key, value) => {
//         if (typeof value === "object" && value !== null) {
//             if (seen.has(value)) {
//                 return;
//             }
//             seen.add(value);
//         }
//         return value;
//     };
// };

const getAll = async (req, res, next) => {
    try {
        var data = await Package.find();

        await res.status(200).json({
            message: "Success get all data",
            data: data
        });
    } catch (error) {
        await res.status(500).json({
            message: "Package not found",
            erorr: error.message
        });
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
            erorr: error.message
        });
    }
}

const createData = async (req, res, next) => {
    try {
        const newData = req.body;

        var data = await Package.create(newData)

        await res.status(200).json({
            message: "Success save new package data",
            data: data
        });
    } catch (error) {
        await res.status(500).json({
            message: "Failed save new package data",
            erorr: error.message
        });
    }
}

const updateDataUsingPut = async (req, res, next) => {
    try {
        const packageId = new mongoose.Types.ObjectId(req.params.id);
        const newPackageData = req.body;

        var updatedData = await Package.findOneAndUpdate(packageId, newPackageData, {
            new: true,
            upsert: true // Make this update into an upsert
        });

        await res.status(200).json({
            message: "Success update package data by id",
            data: updatedData
        });

    } catch (error) {
        await res.status(500).json({
            message: "Failed update package data by id",
            erorr: error.message
        })
    }
}

module.exports = {
    getAll,
    getAllById,
    createData,
    updateDataUsingPut
}