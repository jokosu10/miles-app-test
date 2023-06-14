const Model = require('../models/package');

const getAll = async (req, res, next) => {
    try {
        var data = await Model.find();

        await res.status(200).json({
            message: "Success get all data",
            data: data
        });
    } catch (error) {
        await res.status(500).json({ message: error.message })
    }
}


module.exports = {
    getAll
}