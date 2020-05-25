'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import LoginMenu from '../src/client/LoginMenu.jsx'

describe("Login menu component", () => {
	test('Le menu existe en tant qu objet', () => {
		let loginmenu = renderer.create(<LoginMenu/>);
		let loginmenuJson = loginmenu.toJSON();
		
		expect(typeof loginmenuJson).toBe("object");
		
		/********************************************************************************
		*	Je conseille d'utiliser enzyme pour tester les evenements comme le click	*
		********************************************************************************/
	});
});