const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://shurui:akoayako10@cluster0.shehm0e.mongodb.net/Employee?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  }
}

const app = express();
app.use(express.json());
app.use(cors());

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();

// Define your routes that depend on the database connection here
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = client.db('Employee'); // Replace with your database name
    const collection = db.collection('Login'); // Replace with your collection name

    const user = await collection.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("User not found");
    }
  } catch (err) {
    console.error("Error in /login route:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define other routes and route handlers here

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
