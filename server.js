const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/:url', async (req, res) => {
    try {
        const url = req.params.url;
        const response = await axios.get(url);
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching url' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
