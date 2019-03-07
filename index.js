const express = require('express');
const _ = require('lodash');
const app = express();
const api = require('./api');

app.set('view engine', 'pug');

app.use(express.static('dist'));

app.use('/api', api);

app.get('/*', function (req, res) {
    res.render( 'index' );
})

app.listen( 3000 );