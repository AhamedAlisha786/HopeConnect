const Needs = require('../model/needs');

exports.createNeed = async (req, res) => {
    try {
        const { title, description, category, urgency, targetAmount, imageUrl } = req.body;

        const need = new Needs({
            title,
            description,
            category,
            urgency,
            targetAmount,
            imageUrl
        });

        await need.save();

        res.status(201).json({ message: 'Need created successfully', need });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};