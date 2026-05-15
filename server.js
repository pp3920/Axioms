    //dep
    const express = require("express");
    const app = express();
    const axios = require("axios");
    const apiClient = require("./api/fun-fact");
    const PORT = 2021;


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

        console.error(error.message);

        res.status(500).json({
            message: "Error fetching data"
        });
    }
});

    // PORT
    app.listen(PORT, () => {
        console.log(`Running on PORT: ${PORT}`)
    })
