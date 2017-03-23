import { IRotatorItem } from '../IRotatorItem';
import { IRotatorWebPartProps } from '../IRotatorWebPartProps';
import { IWebpartAction, LOAD, APPLY_PROPERTIES, UPDATE_PROPERTY } from '../actions/actionTypes';
import { assign } from 'lodash';

export interface IWebpartState {
    properties: IRotatorWebPartProps;
     items: ReadonlyArray<IRotatorItem>;
}

export const initialState: IWebpartState = {
    properties: {
        caption: 'Default Caption',
        contentType: 'News',       
    },
     items: []
};

export default (state = initialState, action: IWebpartAction) => {
    switch (action.type) {       
        case UPDATE_PROPERTY:
            return assign({}, state, {
                properties: assign({}, state.properties, {
                    [action.propertyName]: action.value
                })
            });
        case APPLY_PROPERTIES:
            return assign({}, state, {
                properties: action.properties
            });
        case LOAD:
            return assign({}, state, {
                items : action.items
            });
        default:
            return state;
    }
};