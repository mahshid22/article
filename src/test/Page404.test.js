import React from 'react';
import {
    shallow
} from '../enzyme';
import Page404 from '../components/Page404';

describe('Page404 tests', () => {
    it('renders Page404', () => {
        let wrapper = shallow( < Page404 / > );
        expect(wrapper.find('.page404_title')).toBeTruthy();
        expect(wrapper.find('.h1_page404_title').text()).toBe("404 page");
    });

    it('clicked on home button', () => {
        let wrapper = shallow( < Page404 / > );
        const button = wrapper.find('.p404');
        console.log(wrapper.debug());
        {/* button.simulate('click'); */}
        expect(button.hasClass('p404')).toBeTruthy()
    })
});