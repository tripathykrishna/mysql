const {updateTopic,addTopic,getAllTopic,deleteTopic, oneToOne} =require("../controller/topiccontroller.js");

const router = require('express').Router()

router.post('/addTopic' ,addTopic)

router.get('/topices',getAllTopic)

router.put('/:id',updateTopic)

router.delete('/:id',deleteTopic)

router.get('/oneToOne',oneToOne)


module.exports = router;