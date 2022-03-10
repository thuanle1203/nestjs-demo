import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): any => {
    return v2.config({
      cloud_name: 'elnic',
      api_key: '678984399782641',
      api_secret: 'LUKd9zCF_WGacbiHjPGnQX0a1eA',
    });
  },
};
