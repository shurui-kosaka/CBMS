// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Root route handler
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Insert to the database

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success")
        } else {
          res.json("The password is incorrect")
        }
      } else {
        res.json("User not found")
      }
    })
});

// app.post('/signup', (req, res) => {
//   EmployeeModel.create(req.body)
//     .then(employee => res.json(employee))
//     .catch(err => res.json(err));
// });

app.post('/upload', (req, res) => {
  setTimeout(() => {
    console.log('File uploaded')
    return res.status(200).json({ result: true, msg:'File Uploaded'})
  }, 3000);
})

app.delete('/upload', (req, res) => {
    console.log('File deleted')
    return res.status(200).json({ result: true, msg:'File Uploaded'})
})

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
