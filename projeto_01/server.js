const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/soma', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    res.json({ resultado: x + y });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
