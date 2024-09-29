// routes/api.js
const express = require('express');
const router = express.Router();
const pool = require('../models/db');  // Import the database connection (PostgreSQL)

// Example GET route to fetch data from the database
router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM my_table');  // Fetch data from DB
    res.json(result.rows);  // Send data back as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });  // Handle error
  }
});

// Example POST route to add data to the database
router.post('/data', async (req, res) => {
  const { name, value } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO my_table (name, value) VALUES ($1, $2) RETURNING *',
      [name, value]
    );
    res.json(result.rows[0]);  // Return the newly added data
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;