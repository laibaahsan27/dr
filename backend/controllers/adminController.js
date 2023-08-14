const User = require('../Models/Admin');
const bcrypt = require('bcrypt');


const adminLogin = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username }); // Fetch the user from the database
  
      if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ message: 'Admin login successful' });
      } else {
        res.json({ message: 'Admin login unsuccessful' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred during login' });
    }
};

module.exports = {
    adminLogin
};