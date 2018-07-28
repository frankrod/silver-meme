import { apiURL, request } from '../utils/request';

export default class FlickrService {
  getImages(pageNumber) {
    return request(`${apiURL}/images?page=${pageNumber}`);
  }
}
