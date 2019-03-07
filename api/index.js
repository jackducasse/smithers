const express = require('express');
const _ = require('lodash');
const fetch = require('node-fetch');

const apiKey = '6ed12e064b90ae1290fa326ce9e790ff';
const baseUrl = 'https://api.themoviedb.org';
const version = '3';
const moviedbUrl = `${baseUrl}/${version}`;

const app = express.Router();

app.get( '/movies', function( req, res ){
    fetch( `${moviedbUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}` )
        .then( response => response.json() )
        .then( response => res.json( response.results ) );
    } )
    .get( '/movies/:id', function( req, res ){
        const { id } = req.params;
        fetch( `${moviedbUrl}/movie/${id}?api_key=${apiKey}` )
            .then( response => response.json() )
            .then( response => res.json( response ) );
        } )
    .get( '/shows', function( req, res ){
        fetch( `${moviedbUrl}/discover/tv?sort_by=popularity.desc&api_key=${apiKey}` )
            .then( response => response.json() )
            .then( response => res.json( response.results ) );
    } )

module.exports = app;
