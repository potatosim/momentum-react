import axios from 'axios';
import { getRandom } from 'helpers/getRandom';

export interface ImageItem {
  url_l: string;
}

interface PhotoItems {
  photo: ImageItem[];
}

interface ImageResponse {
  photos: PhotoItems;
}

export default class ImageApi {
  async getBGImage(tag: string) {
    const { data } = await axios.get<ImageResponse>(
      `${process.env.REACT_APP_FLICKR_BASE_URL}/rest`,
      {
        params: {
          method: 'flickr.photos.search',
          api_key: process.env.REACT_APP_FLICKR_KEY,
          tags: tag,
          extras: 'url_l',
          format: 'json',
          nojsoncallback: 1,
        },
      },
    );

    const itemsWithUrl = data.photos.photo.filter((item) => item.url_l);
    return {
      photo: itemsWithUrl[getRandom(0, itemsWithUrl.length - 1)].url_l,
      allImages: itemsWithUrl,
    };
  }
}
