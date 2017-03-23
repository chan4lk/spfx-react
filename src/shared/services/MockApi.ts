import { IListApi } from './IListApi';
import { assign } from 'lodash';

const delay = 300;
const items = [
    {
        id: 1,
        title: 'Image 1',
        imagePath: '/images/news1.jpg',
        tooltip: 'Image 1\'s tool tip'
    },
    {
        id: 2,
        title: 'Image 2',
        imagePath: '/images/news2.jpg',
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