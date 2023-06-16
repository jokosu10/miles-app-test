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

        if (data === null) {
            res.status(404).json({
                message: "Package data not found",
            });
        }

        if (res.headersSent) {
            return;
        }

        res.status(200).json({
            message: "Success get all package data",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed get all package data",
            erorr: error.message
        });
    }
}

const getAllById = async (req, res, next) => {
    try {
        const packageId = new mongoose.Types.ObjectId(req.params.id);

        var dataById = await Package.findOne({ _id: packageId });

        if (dataById === null) {
            res.status(404).json({
                message: "Package data not found",
            });
        }

        if (res.headersSent) {
            return;
        }

        res.status(200).json({
            message: "Success get package data by id",
            data: dataById
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed get package data by id",
            erorr: error.message
        });
    }
}

const createData = async (req, res, next) => {
    try {
        const newData = req.body;

        var data = await Package.create(newData);

        if (res.headersSent) {
            return;
        }

        // Set headers
        res.setHeader('Content-Type', 'application/json');

        res.status(200).json({
            message: "Success save new package data",
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed save new package data",
            erorr: error.message
        });
    }
}

const updateDataUsingPut = async (req, res, next) => {
    try {
        const packageId = new mongoose.Types.ObjectId(req.params.id);
        const newPackageData = req.body;

        var dataById = await Package.findOne({ _id: packageId });

        if (dataById === null) {
            res.status(404).json({
                message: "Package data not found",
            });
        }

        if (res.headersSent) {
            return;
        }

        var updatedData = await Package.findOneAndUpdate(packageId, newPackageData, {
            new: true
        });

        // Set headers
        res.setHeader('Content-Type', 'application/json');

        res.status(200).json({
            message: "Success update package data by id",
            data: updatedData
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed update package data by id",
            erorr: error.message
        });
    }
}

// not perfect
const updateDataUsingPatch = async (req, res, next) => {
    try {
        const packageId = new mongoose.Types.ObjectId(req.params.id);
        const updateFieldPackage = req.body;

        var existingDataById = await Package.findOne({ _id: packageId });

        if (existingDataById === null) {
            res.status(404).json({
                message: "Package data not found",
            });
        }

        if (res.headersSent) {
            return;
        }

        await Package.findByIdAndUpdate(
            packageId,
            { $set: updateFieldPackage },
            { new: true }
        );

        // Set headers
        res.setHeader('Content-Type', 'application/json');

        res.status(200).json({
            message: "Success update package data by id",
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed update package data by id",
            erorr: error.message
        });
    }
}

const deleteDataById = async (req, res, next) => {
    try {
        const packageId = new mongoose.Types.ObjectId(req.params.id);

        var dataById = await Package.findOne({ _id: packageId });

        if (dataById === null) {
            res.status(404).json({
                message: "Package data not found",
            });
        }

        if (res.headersSent) {
            return;
        }

        await Package.findByIdAndDelete(packageId);

        res.status(200).json({
            message: "Success delete package data by id"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed delete package data by id",
            erorr: error.message
        });
    }
}

module.exports = {
    getAll,
    getAllById,
    createData,
    updateDataUsingPut,
    updateDataUsingPatch,
    deleteDataById
}