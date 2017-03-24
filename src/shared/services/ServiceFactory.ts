import { Environment, EnvironmentType  } from '@microsoft/sp-core-library';
import { IListApi } from './IListApi';
import MockApi  from './MockApi';
import SearchApi from './SearchApi';
import { IUtilityService } from './IUtilityService';
import UtilityService from './UtilityService';

export default /**
 * RemoteServiceFactory
 */
class RemoteServiceFactory {
    public getRemoteApi() : IListApi{
        if(Environment.type === EnvironmentType.Local){
            return new MockApi();
        }

         return new SearchApi();
    }

    public getUtilityService(): IUtilityService {
        return new UtilityService();
    }
}