import {expect} from 'chai';
import reducers from '../reducers/webpart';


describe('Reducers', () => {
    it('should retrun a state', ()=> {
        let action = { type: 'NEXT', payload : {url:'#next'}};
        //let nextState = reducers([], action);
        //expect(nextState.currentSlide).to.equal(0);
        //expect(nextState.url).to.equal('#next');

    });
});