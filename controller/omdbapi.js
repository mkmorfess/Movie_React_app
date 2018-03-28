const request = require('request');
const express = require('express');
const router = express.Router();

router.post("/api/movies", (req, res) => {
    console.log(req.body.movies);
    request("http://www.omdbapi.com/?apikey=135f4b95&t=" + req.body.movies, (err, response, data) => {
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
})


module.exports = router;