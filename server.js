const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, 'public')));

// Redirect blank and root to index.html
app.get(['/', ''], (req, res) => {
  res.redirect('/index.html');
});

app.listen(PORT, () => {
  console.log(`Raqkid Editor running at http://localhost:${PORT}`);
});
