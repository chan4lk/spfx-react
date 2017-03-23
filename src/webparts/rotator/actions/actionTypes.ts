import { IRotatorItem } from '../IRotatorItem';
import { IRotatorWebPartProps } from '../IRotatorWebPartProps';

export const LOAD = 'webpart/LOAD';
export const NAVIGATE = 'webpart/NAVIGATE';
export const UPDATE_PROPERTY = 'webpart/UPDATE_PROPERTY';
export const APPLY_PROPERTIES = 'webpart/APPLY_PROPERTIES';

export interface IUpdatePropertyAction {
    type: 'webpart/UPDATE_PROPERTY'; // TODO is there a way to use the const?
    propertyName: string;
    value: any;
}
export interface IApplyPropertiesAction {
    type: 'webpart/APPLY_PROPERTIES'; // TODO is there a way to use the const?
    properties: IRotatorWebPartProps;
}

export interface ILoadAction {
    type: 'webpart/LOAD';
    items: ReadonlyArray<IRotatorItem>;
}

export interface INavigateAction {
    type: 'webpart/NAVIGATE';
    url: string;
}


export type IWebpartAction =
    IApplyPropertiesAction |
    IUpdatePropertyAction |
    ILoadAction |
    INavigateAction;