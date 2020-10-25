const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
const server = http.createServer(app);

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

server.listen(3000, ()=> console.log('App is runnning on port 3000'));