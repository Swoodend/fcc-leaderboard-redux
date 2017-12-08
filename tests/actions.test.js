import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../src/actions/actions';

describe("the fetchingData action cretor", () => {
    it("should return the correct action based on the argument provided", () => {
        let expectedAction = { type: "FETCHING_DATA", payload: true };
        expect(actions.fetchingData(true)).toEqual(expectedAction);
    });
});