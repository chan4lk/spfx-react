import { IListApi } from './IListApi';
import { assign } from 'lodash';
import { sp, SearchQuery } from 'sp-pnp-js';
import factory from './ServiceFactory';

export default /**
 * SearchApi
 */
    class SearchApi implements IListApi {
    public getItemsByContentType<T>(type: string) {

        const searchQuery: SearchQuery = {
            Querytext: `contentType:${type}`,
            SelectProperties:['ListItemID', 'Title', 'JSNewsThumbnailOWSIMGE', 'JSSynopsisOWSMTXT'],
            RowLimit: 500
        };

        return sp.search(searchQuery).then(results => {
            let items = [];
            results.PrimarySearchResults
            .filter(result => result.JSNewsThumbnailOWSIMGE)
            .slice(0,5)
            .forEach((result) => {
                let util = new factory().getUtilityService();
                items.push({
                    id: result.ListItemID,
                    title: result.Title,
                    imagePath: util.cleanSrc(result.JSNewsThumbnailOWSIMGE),
                    tooltip: result.JSSynopsisOWSMTXT
                });
            });
            return items;
        }).catch(err => {
            throw (err);
        })
    }
}