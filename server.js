    //dep

    require('dotenv').config();
    const express = require("express");
    const app = express();
    const axios = require("axios");
    const apiClient = require("./api/fun-fact");
    const PORT = 2026


    //route

    app.get("/test", (req, res) => {
        res.send("Test Route")
    });


    //fetch from external api

 app.get("/users", async (req, res) => {

    try {

        const response = await apiClient.get();

        const TransformData = {
            fact: response.data.text
        };

        res.json(TransformData);

    } catch (error) {
	if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
      res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
    } else {
      console.error('Network Error:', error.message);
      res.status(500).json({ message: 'A network error occurred.' });
    }
  }
});


    // PORT
    app.listen(PORT, () => {
        console.log(`Running on PORT: ${PORT}`)
    })
