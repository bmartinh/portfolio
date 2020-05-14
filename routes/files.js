const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:file", (req, res) => {
   const file = path.join(__dirname, "../files", `${req.params.file}.pdf`);
   res.download(file, function (err) {
      if (err) {
         console.log("Error");
         console.log(err);
      } else {
         console.log("Success");
      }
   });
});

module.exports = router;
