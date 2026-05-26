const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const PUBLIC = path.join(__dirname, 'public');

// Serve static files at both root and /portfolio prefix
// so all asset references work regardless of path
app.use(express.static(PUBLIC));
app.use('/portfolio', express.static(PUBLIC));

// SPA fallback
app.get('/portfolio', (_, res) => res.sendFile(path.join(PUBLIC, 'index.html')));
app.get('/portfolio/*', (_, res) => res.sendFile(path.join(PUBLIC, 'index.html')));
app.get('/', (_, res) => res.sendFile(path.join(PUBLIC, 'index.html')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio running on port ${PORT}`);
});
