const express = require('express');

const router = express.Router();

router.route('/')
 .get((req, res) => {
    res.status(200).json({ message: 'Hello World!' });
  })
  .post((req, res) => {
    res.status(200).json({ message: 'Hello World!' });
  })
  .delete((req, res) => {
    res.status(200).json({ message: 'Hello World!' });
  });


module.exports = router;