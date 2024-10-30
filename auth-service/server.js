const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5001; // Different port from the main backend

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/authservice', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Auth service running on port: ${PORT}`));
  })
  .catch(error => console.error('MongoDB connection error:', error));

app.listen(PORT, () => {
  console.log(`Authentication service running on port ${PORT}`);
});
