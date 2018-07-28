'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');
const FlickrService = require('./services/flickr');

const server = new Hapi.Server({
    port: 3000,
    routes: {
      cors: {
          origin: ['*'],
      },
      files: {
          relativeTo: Path.join(__dirname, '../build')
      }
    }
});



const provision = async () => {

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
                index: true,
            }
        }
    });

    server.route({
      method:'GET',
      path:'/images',
      handler: async function(request,h) {
          const flickrService = new FlickrService();

          return await flickrService.getImages(request.query.page);
      }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

provision();