import { LOAD, UPDATE_PROPERTY, APPLY_PROPERTIES, NAVIGATE } from './actionTypes';
import { IRotatorItem } from '../IRotatorItem';
import { IRotatorWebPartProps } from '../IRotatorWebPartProps';
import ServiceFactory from '../../../shared/services/ServiceFactory';

export function loadItemsSuccess(items: ReadonlyArray<IRotatorItem>) {
    return { type: LOAD, items: items };
}

export function navigateToURL(url:string) {
    return { type: NAVIGATE, url: url };
}

export function updateProperty(propertyName: string, value: any) {
    return { type: UPDATE_PROPERTY, propertyName, value };
}

export function applyProperties(properties: IRotatorWebPartProps) {
    return { type: APPLY_PROPERTIES, properties };
}

export function loadItems(contentType: string) {
    return (dispatch) => {
        return new ServiceFactory()
            .getRemoteApi()
            .getItemsByContentType<ReadonlyArray<IRotatorItem>>(contentType)
            .then((items) => {
                dispatch(loadItemsSuccess(items));
            }).catch(err => {
                throw (err);
            });
    };
}
