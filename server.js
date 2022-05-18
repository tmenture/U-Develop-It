// File dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Expres middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Default response for any other requests not found
app.use((req, res) => {
    res.status(404).end();
});

// Starts the server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});