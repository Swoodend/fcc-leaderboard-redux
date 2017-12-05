import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/components/App';

describe('<App/>', () => {
    let component = shallow(<App/>);
    it("should render without crashing", () => {
        expect(component.length).toEqual(1);
    });
});