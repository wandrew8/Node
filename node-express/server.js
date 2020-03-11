const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//catch all for all http methods
app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/campsites', (req, res) => {
    res.end('Will send all the campsites to you');
});

app.post('/campsites', (req, res) => { 
    res.end(`Will add the campsites: ${req.body.name} with description: ${req.body.description}`);
});

app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /campsites')
});

app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites')
});

app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req, res) => { 
    res.statusCode = 403;
    res.end(`POST operation is not permitted on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name} with description ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
    res.end(`Deleting campsite: ${req.params.campsiteId}`)
});

//This serves files from the public folder (automatically serves index.html)
app.use(express.static(__dirname + '/public'));

//This is the default page when other path names don't work
app.use((req, res) => {
    res.statusMessage = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}${port}`)
})