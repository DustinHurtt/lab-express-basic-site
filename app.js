const express = require('express');
 
const app = express();

app.use(express.static('public'));

app.get('/Home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

app.get('/About', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

app.get('/Works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

app.get('/Photo-Gallery', (request, response, next) => response.sendFile(__dirname + '/views/photo-gallery.html'));

app.listen(3000, () => console.log('Server listening on port 3000.'));