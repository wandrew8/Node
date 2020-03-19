const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the campsites to you');
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.end('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send campsite info for the campsite with ID: ${req.params.campsiteId}`);
})
.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with ID: ${req.params.campsiteId} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.end(`Will update the campsite with the ID: ${req.params.campsiteId}`);
})
.delete((req, res) => {
    res.end(`Will delete the campsite with the ID: ${req.params.campsiteId}`);
});

module.exports = campsiteRouter;