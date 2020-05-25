'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RegisterForm from '../src/client/RegisterForm.jsx'

const {act} = renderer;

describe("Register form component", () => {
	test('La forme existe en tant qu objet', () => {
		let registerForm = renderer.create(<RegisterForm/>);
		let registerFormJson = registerForm.toJSON();
		
		expect(typeof registerFormJson).toBe("object");
		
		/********************************************************************************
		*	Je conseille d'utiliser enzyme pour tester les evenements comme le click	*
		********************************************************************************/
	});
});