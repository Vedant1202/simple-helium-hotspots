const express = require('express');
const { getCities, getHotspotsByCity } = require('./handlers');
const app = express();

const port = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello! Helium Simple API is running successfully');
})

app.get('/cities', async (req, res) => {
    const results = await getCities();

    res.send({
        ...results,
    });
});


app.get('/cities/:cityId', async (req, res) => {
    const { cityId } = req.params;
    const results = await getHotspotsByCity(cityId);

    res.send({
        ...results,
    });
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})