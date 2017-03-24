import { IListApi } from './IListApi';
import { assign } from 'lodash';

const publicCdnImage1 = 'https://angular.io/resources/images/logos/angular2/angular.svg';
const publicCdnImage2 = 'https://cdn.worldvectorlogo.com/logos/react.svg';

const delay = 300;
const items = [
    {
        id: 1,
        title: 'Angular',
        imagePath: publicCdnImage1,
        tooltip: 'Image 1\'s tool tip'
    },
    {
        id: 2,
        title: 'React',
        imagePath: publicCdnImage2,
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