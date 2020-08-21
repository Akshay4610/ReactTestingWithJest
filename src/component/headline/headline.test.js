import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../headline';

import {findByTestAttr} from '../../utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline Component', () => {
    describe('Have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test desc'
            }
           component = setUp(props);
        });

        it('Should render without errors', () => {
            const wrapper = findByTestAttr(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a H1', () => {
            const h1 = findByTestAttr(component, 'header');
            expect(h1.length).toBe(1);
        });

        it('Should render a Description', () => {
            const desc = findByTestAttr(component, 'desc');
            expect(desc.length).toBe(1);
        });
    });

    describe('Have no props', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });
        
        it('Should not render', () => {
            const wrapper = findByTestAttr(component, 'HeadlineComponent');
            expect(wrapper.length).toBe(0);
        })
    })
})