const express = require('express');
const bodyParser = require('body-parser');

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partners to you');
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send partner info for the partner with ID: ${req.params.partnerId}`);
})
.post((req, res) => {
    res.end(`Will add the partner: ${req.body.name} with ID: ${req.params.partnerId} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.end(`Will update the partner with the ID: ${req.params.partnerId}`);
})
.delete((req, res) => {
    res.end(`Will delete the partner with the ID: ${req.params.partnerId}`);
});

module.exports = partnerRouter;