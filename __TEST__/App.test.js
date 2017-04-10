import React 			from 'react';
import { AddContact } 	from './components/addcontact';
import {Provider} 		from 'react-redux';
import App 				from './App';

import { shallow, mount } from 'enzyme';
import data 			from './reducers/Data';


it('renders without crashing base and provider component', () => {
	const Store={ 
						subscribe:function(){return true;},
						dispatch :function(){return true;},
						getState :function(){return true;},
	}
	const app=shallow(<Provider store={Store}><App/></Provider>);
   
});


