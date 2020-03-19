const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send promotion info for the promotion with ID: ${req.params.partnerId}`);
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with ID: ${req.params.partnerId} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.end(`Will update the promotion with the ID: ${req.params.partnerId}`);
})
.delete((req, res) => {
    res.end(`Will delete the promotion with the ID: ${req.params.partnerId}`);
});

module.exports = promotionRouter;