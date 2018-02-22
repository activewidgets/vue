
import {Grid} from '../../';
import {mount, shallow} from '@vue/test-utils';


test('empty', () => {
    const wrapper = shallow(Grid);
    expect(wrapper.is('div.ax-grid')).toBe(true);
});