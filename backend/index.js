const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routerAdmin = require('./routes/adminRoutes');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('./Models/Admin');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api',routerAdmin);


// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username }); // Fetch the user from the database

//     if (user && (await bcrypt.compare(password, user.password))) {
//       res.json({ message: 'Admin login successful' });
//     } else {
//       res.json({ message: 'Admin login unsuccessful' });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'An error occurred during login' });
//   }
// });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
