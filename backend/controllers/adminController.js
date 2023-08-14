const User = require('../Models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

const jwtKey = process.env.JWT_KEY;

const adminLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            jwt.sign({ username }, jwtKey, { expiresIn: '1h' }, (err, token) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: 'An error occurred during login' });
                } else {
                    res.json({ auth: token, message: 'Admin login successful' });
                }
            });
        } else {
            res.json({ message: 'Admin login unsuccessful' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
};

module.exports = {
    adminLogin,
};
