const express = require('express')
const router = express.Router();

router.get('/', (req, res) => res.send("Hola amigo, estas en el puerto 5000"));


module.exports = router;