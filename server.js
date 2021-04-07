// Server

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const axios = require("axios");
const api = "https://api.spacexdata.com/v3";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/launches", cors(), (req, res) => {
  axios
    .get(`${api}/launches/past`, {
      params: {
        ...req.query,
      },
    })
    .then((axres) => {
      // const count = axres.headers["spacex-api-count"];
      // console.log(count);
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

app.get("/rockets", cors(), (req, res) => {
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
          picture: item.flickr_images[0],
        };
      });

      res.send(d);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
