
import {Grid} from '../../';
import {mount, shallowMount} from '@vue/test-utils';


test('empty', () => {
    const wrapper = shallowMount(Grid);
    expect(wrapper.is('div.ax-grid')).toBe(true);
});