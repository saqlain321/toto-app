const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/todo'));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
