
const Flickr = require('flickrapi');

class FlickrService {
  constructor() {
    this.flickrOptions = {
      api_key: 'e4023f5f29371967801a9cc28a8b9653',
      secret: 'b7c95ec29048444e'
    };
  }

  getImages(page) {
    return new Promise((resolve, reject) => {
      Flickr.tokenOnly(this.flickrOptions, (error, flickr) => {
          if(error) reject(error);
          flickr.photos.search({
              text:'red+panda',
              extras: 'url_m',
              page: page,
              per_page: 10
          }, function(err, result) {
              if(err) reject(err);                
              resolve(result);
          });
      });
  })
  }
}

module.exports = FlickrService