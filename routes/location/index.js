import express from "express";
const router = express.Router();

router.get("/all-locations", function (req, res) {
  res.send("");
});

router.get("/location/:id", function (req, res) {
  res.send("");
});

export default router;
