import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

	it('removes hasVoted on SET_STATE if pair changes', () => {
	  const initialState = fromJS({
		vote: {
		  pair: ['Trainspotting', '28 Days Later'],
		  tally: {Trainspotting: 1}
		},
		hasVoted: 'Trainspotting'
	  });
	  const action = {
		type: 'SET_STATE',
		state: {
		  vote: {
			pair: ['Sunshine', 'Slumdog Millionaire']
		  }
		}
	  };
	  const nextState = reducer(initialState, action);

	  expect(nextState).to.equal(fromJS({
		vote: {
		  pair: ['Sunshine', 'Slumdog Millionaire']
		}
	  }));
	});

});