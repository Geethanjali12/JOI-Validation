const userSchema = require('../models/UserModel');

const userController = {
    createuser: async (req, res) => {
            const { error, value } = userSchema.validate(req.body, {
                abortEarly: false,
            });
            if (error) {
                console.log('error', error);
                return res.status(400).json({ error: error.details.map(err => err.message) });
            } else {
                return res.status(200).json({ message: 'User Created Successfully', data: value });
            } 
    }
}

module.exports = userController;