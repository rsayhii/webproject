const express = require('express');
const app = express();
const path = require('path');
const Port = 8000;
const hbs = require('hbs');

// public static path
const staticPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// routing
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})
    
app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.render('error',{
        error: 'Opps! Page Not Found',
    });
})

app.listen(Port, () => {
    console.log(`it is running on port no. ${Port}`);
})