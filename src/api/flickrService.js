import { apiURL, request } from '../utils/request';

export default class FlickrService {
  getImages() {
    return request(`${apiURL}/images`);
  }
}
