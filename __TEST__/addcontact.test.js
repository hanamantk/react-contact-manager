import React 			from 'react';
import { AddContact } 	from './components/addcontact';
import {Provider} 		from 'react-redux';
import App 				from './App';

import { shallow, mount } from 'enzyme';
import data 			from './reducers/Data';



it('updateting user profile', () => {

	const loc = { pathname: '/UpdateContact', query: { id: 10 } };
   const contact = mount(<AddContact data={data} name="hanmant" location={loc} />);
    addForm.refs.fname.getDOMNode().value = 'hanamant';
expect(addForm.refs.fname.getDOMNode().value).toEqual('hanamant');
  
});



it('creating new user profile', () => {
	const loc = { pathname: '/aaa'};
   const wrapper = mount(<AddContact data={data} location={loc} />);
  
});
