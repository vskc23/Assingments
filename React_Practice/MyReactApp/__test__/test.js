// jest.unmock('../sum'); // unmock to use the actual implementation of sum
// describe('sum', () => {
//     it('adds 1 + 2 to equal 3', () => {
//         const sum = require('../sum');
//         expect(sum(1, 2)).toBe(3);
//     });
// });

import React from 'react';
import { shallow } from 'enzyme';
import App12 from '../App12.jsx';
describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<App12/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'React'}});
expect(wrapper.state('username')).toEqual('React');
})

})