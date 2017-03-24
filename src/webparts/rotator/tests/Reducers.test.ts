import {expect} from 'chai';
import reducers from '../reducers/webpart';
import { IWebpartAction, IUpdatePropertyAction, APPLY_PROPERTIES , UPDATE_PROPERTY} from '../actions/actionTypes';

describe('Reducers', () => {
    it('should apply properties', ()=> {
        let action: IWebpartAction = { type: APPLY_PROPERTIES, properties: {caption:'News Rotator', contentType:'News'}};
        let nextState = reducers(undefined, action);
        expect(nextState.properties.caption).to.equal('News Rotator');
        expect(nextState.properties.contentType).to.equal('News');
    });

     it('should update property', ()=> {
        const initialState = { properties: {caption:'old caption', contentType:''}, items:[]};
        let action: IUpdatePropertyAction = { type: UPDATE_PROPERTY, propertyName:'contentType', value:'New Type'};
        let nextState = reducers(initialState, action);
        expect(nextState.properties.caption).to.equal('old caption');
        expect(nextState.properties.contentType).to.equal('New Type');
    });
});