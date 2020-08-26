const express = require('express');
const carsdb = require('./data/config');
const server = express();

server.use(express.json());

server.get('/cars', async(req,res) => {
    try {
        const cars = await carsdb('cartable')
        res.json(cars)
       } catch (err) {
           console.log(err)
       }
        
})

server.get('/cars/:id', async(req,res) => {
    try {
        const [car] = await carsdb
        .select('*')
        .from('cartable')
        .where('id', req.params.id)
        .limit()
        res.json(car)

       } catch (err) {
           console.log(err)
       }
        
})

server.post('/cars', async(req,res) => {
    try {
        const [id] = await carsdb
            .insert({
                vin:req.body.vin,
                make:req.body.make,
                model:req.body.model,
                mileage:req.body.mileage,
                transmission_type:req.body.transmission_type,
                status:req.body.status
            })
            .into('cartable')
        const car = await carsdb('cartable')
            .where('id',id)
            .first()
        
        res.status(201).json(car)
    } catch(err) {
        console.log(err)
    }
})

//stretch


server.put('/cars/:id', async(req,res) => {
    try {
        await carsdb('cartable')
        .update({
            vin:req.body.vin,
            make:req.body.make,
            model:req.body.model,
            mileage:req.body.mileage,
            transmission_type:req.body.transmission_type,
            status:req.body.status
        })
        .where('id', req.params.id)
        
        const car = await carsdb('cartable')
            .where('id', req.params.id)
            .first()

            res.json(car)

       } catch (err) {
           console.log(err)
       }
        
})

server.delete('/cars/:id', async(req,res) => {
    try {
       await carsdb('cartable')
        .where('id', req.params.id)
        .del()
        res.status(204).end()

       } catch (err) {
           console.log(err)
       }
        
})


server.get('/', (req,res) => {
    res.send(`<h1>API is up!</h1>`)
});

module.exports = server;