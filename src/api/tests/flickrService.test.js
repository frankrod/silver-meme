import { apiURL } from '../../utils/request';
import FlickrService from '../flickrService';

describe('flickr service', () => {
  it('should return images from api', () => {
    const responseJSON = [
      {
        photos: {}
      }
    ];
    const mockedFetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 200,
        ok: true,
        json: () => Promise.resolve(responseJSON)
      })
    );

    window.fetch = mockedFetch;

    const pageNumber = 1
    const flickrService = new FlickrService();
    
    expect.assertions(2);
    return flickrService.getImages(pageNumber).then((response) => {
      expect(mockedFetch).toHaveBeenCalledWith(`${apiURL}/images?page=${pageNumber}`, undefined);
      expect(response).toEqual(responseJSON);
    });
  });
});
