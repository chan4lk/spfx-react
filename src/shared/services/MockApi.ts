import { IListApi } from './IListApi';
import { assign } from 'lodash';

const publicCdnImage = 'https://angular.io/resources/images/logos/angular2/angular.svg';

const delay = 300;
const items = [
    {
        id: 1,
        title: 'Image 1',
        imagePath: publicCdnImage,
        tooltip: 'Image 1\'s tool tip'
    },
    {
        id: 2,
        title: 'Image 2',
        imagePath: publicCdnImage,
        tooltip: 'Image 2\'s tool tip'
    }
];


export default /**
 * MockApi
 */
    class MockApi implements IListApi {
    public getItemsByContentType<T>(type: string): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(assign([], items));
            }, delay);
        });
    }
}