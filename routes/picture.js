const router = require("express").Router();
const pictures = require("../models/pictures/pictures");
const formidable = require("formidable");
const axios = require("axios");
const fs = require("fs");
const request = require("request");

router.get("/:id", (req, res) => {
  picture
    .getById(req.params.id)
    .then(picture => {
      if (picture) res.status(200).json(picture);
      else res.status(404).json({ message: "Image not found" });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "Error retrieving picture. " + error.toString() });
    });
});

router.get("/image/:id", (req, res) => {
  picture
    .getByImgId(req.params.id)
    .then(picture => {
      if (picture) res.status(200).json(picture);
      else res.status(404).json({ message: "Image not found" });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "Error retrieving picture. " + error.toString() });
    });
});

router.get("/animal/:id", (req, res) => {
  picture
    .getByImgId(req.params.id)
    .then(picture => {
      if (picture.length > 0) res.status(200).json(picture);
      else res.status(404).json({ message: "No images found" });
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "Error retrieving pictures. " + error.toString() });
    });
});

router.delete("/:id", validateImageId, (req, res) => {
  picture
    .remove(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res
        .status(500)
        .json({ error: "Error removing pictures. " + error.toString() });
    });
});

router.post("/", (req, res) => {
  const form = new formidable.IncomingForm().parse(
    req,
    async (err, fields, files) => {
      if (err) {
        console.error("Error", err);
        throw err;
      }
      const formData = {
        api_key: process.env.image_api_key,
        image: fs.createReadStream(files.image.path)
      };
      request.post(
        {
          url: process.env.upload_url,
          formData,
          header: { "Content-type": "application/x-www-form-urlencoded" }
        },
        function optionalCallback(err, httpResponse, body) {
          if (err) {
            res.status(400).json({ error: "Error uploading image " + err });
          }
          res.status(200).json(body);
        }
      );
    }
  );
});

function validateImageId(req, res, next) {
  if (req.params.id) {
    pictures
      .getById(req.params.id)
      .then(picture => {
        if (picture) {
          next();
        } else {
          res
            .status(404)
            .json({ message: `No picture found by id: ${req.params.id}` });
        }
      })
      .catch(error => {
        res
          .status(500)
          .json({ error: "Error getting image " + error.toString() });
      });
  }
}

module.exports = router;
