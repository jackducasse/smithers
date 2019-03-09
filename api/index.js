const express = require('express');
const _ = require('lodash');
// const fetch = require('node-fetch');
const request = require('superagent');

const apiKey = '6ed12e064b90ae1290fa326ce9e790ff';
const baseUrl = 'https://api.themoviedb.org';
const version = '3';
const moviedbUrl = `${baseUrl}/${version}`;

const app = express.Router();

const handleError = res => e => res.status(e.status).send( e );

app.get( '/movies/:id', function( req, res ){
        const { id } = req.params;
        request( `${moviedbUrl}/movie/${id}?api_key=${apiKey}` )
            .then( response => res.json( response.body ) )
            .catch( handleError( res ) );
    } )
    .get( '/movies', function( req, res ){
        request( `${moviedbUrl}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}` )
            .then( response => res.json( response.body.results ) )
            .catch( handleError( res ) );
    } )
    .get( '/shows', function( req, res ){
        request( `${moviedbUrl}/discover/tv?sort_by=popularity.desc&api_key=${apiKey}` )
            .then( response => res.json( response.body.results ) )
            .catch( handleError( res ) );
    } )
    .get( '/*', function( req, res ){
        res.json( res.status(404).send(Error(404)) );
    } )

module.exports = app;
