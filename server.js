// Server

const express = require("express");
const app = express();
const port = 4000;

const axios = require("axios");
const api = "https://api.spacexdata.com/v3";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/launches", (req, res) => {
  axios
    .get(`${api}/launches/past`, {
      params: {
        limit: req.query.limit ? req.query.limit : 50,
        ...req.query,
      },
    })
    .then((axres) => {
      const d = axres.data.map((item) => {
        return {
          name: item.mission_name,
          details: item.details,
          mission_patch: item.links.mission_patch,
          youtube_link: item.links.video_link,
        };
      });

      res.send(d);
    });
});

app.get("/rockets", (req, res) => {
  axios
    .get(`${api}/rockets`, {
      params: {
        ...req.query,
      },
    })
    .then((axres) => {
      const d = axres.data.map((item) => {
        return {
          name: item.rocket_name,
          description: item.description,
          cost: item.cost_per_launch.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }),
          image: item.flickr_images[0],
        };
      });

      res.send(d);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
