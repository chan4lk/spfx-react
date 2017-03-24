import { IUtilityService } from './IUtilityService';
export default class UtilityService implements IUtilityService {
    cleanSrc(pictureURL:string): string{
         let src;
                try {
                    src = pictureURL.match(/src=(.+?[\.jpg|\.gif|.\png|.\bmp]")/)[1];
                    src = src.replace(/['"]+/g, '');
                }
                catch (err) {
                    try {
                        src = pictureURL.split('src="')[1].split('"')[0];
                        let hasRendition = src.split('?');
                        if (hasRendition && hasRendition.length > 1) {
                            src = hasRendition[0];
                        }
                    }
                    catch (err) {
                        src = '';
                    }
                }
                return src;
    }
}