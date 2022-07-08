const express = require('express')
const subscriber = require('../models/subscriber')
const router = express.Router()
const Subscriber = require('../models/subscriber')

router.get('/', async (req, res)=>{
   try{
        const subscriber = await Subscriber.find()
        res.json(subscriber)
   }catch(error){
        res.status(500).send(error.menssege)

   }
})
router.get('/:id', (req, res)=>{

})
router.post('/', async (req, res)=>{
    const subscriber = new Subscriber({
        name: req.body.name,
        userChannel: req.body.userChannel
    })
    try { 
        const newSubscriber = await subscriber.save()
        res.status(200).json(newSubscriber)
        
    } catch (error) {
        
    }
})
router.patch('/:id', (req, res)=>{

})
router.delete('/:id', (req, res)=>{

})

module.exports = router