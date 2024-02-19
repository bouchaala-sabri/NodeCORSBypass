const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/:url', async (req, res) => {
    try {
        const url = req.params.url;
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0'
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send({ 
            message: 'Error fetching url',
            error: {
                message: error.message,
                stack: error.stack,
                config: error.config
            }
        });
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
