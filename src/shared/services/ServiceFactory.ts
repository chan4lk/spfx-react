import { Environment, EnvironmentType  } from '@microsoft/sp-core-library';
import { IListApi } from './IListApi';
import MockApi  from './MockApi';

export default /**
 * RemoteServiceFactory
 */
class RemoteServiceFactory {
    public getRemoteApi() : IListApi{
        if(Environment.type === EnvironmentType.Local){
            return new MockApi();
        }

         return new MockApi();
    }
}