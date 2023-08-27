const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routerAdmin = require('./routes/adminRoutes');
const bcrypt = require('bcrypt');
require('dotenv').config();
const User = require('./Models/Admin');
const ServiceRequest = require('./Models/ServiceRequest');
const routerService = require('./routes/seviceRoutes');

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
app.use('/api',routerService);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
