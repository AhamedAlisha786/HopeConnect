const Success = require("../model/success");

exports.createSuccessStory = async (req, res) => {
    try {
        const { title, relatedNeed, story, imageUrl } = req.body;

        const successStory = new Success({
            title,
            relatedNeed,
            story,
            imageUrl
        });

        await successStory.save();

        res.status(201).json({ message: 'Success story created successfully', successStory });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};  