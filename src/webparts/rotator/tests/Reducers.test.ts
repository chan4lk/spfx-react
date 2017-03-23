import {expect} from 'chai';
import reducers from '../reducers/webpart';
import { IWebpartAction, APPLY_PROPERTIES } from '../actions/actionTypes';

describe('Reducers', () => {
    it('should retrun a state', ()=> {
        let action: IWebpartAction = { type: APPLY_PROPERTIES, properties: {caption:'News Rotator', contentType:'News'}};
        let nextState = reducers(undefined, action);
        expect(nextState.properties.caption).to.equal('News Rotator');
        expect(nextState.properties.contentType).to.equal('News');

    });
});