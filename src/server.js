// Import  modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

// Create an Express application
const app = express();

// CORS middleware to handle cross origin requests
app.use(cors());

// Connect to MongoDB using Mongoose
const mongoURI = 'mongodb+srv://admin:Graviton987@cluster0.df2zkpy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a Multer storage engine to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name for storage
  },
});

// Create a Multer instance with the storage engine
const upload = multer({ storage });


// Define a route to get items from database
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find(); // Retrieve  items from database
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Define a route to add an item to the database
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body); // Create a new item based on the request 
  try {
    const savedItem = await newItem.save(); // Save the new item to the database
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Set up a route to handle API endpoints 
app.get('*', (req, res) => {
  res.send('Welcome to your Express server!');
});

// Set the port for the server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

