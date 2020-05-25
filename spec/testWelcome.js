'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Welcome from '../src/client/Welcome.jsx'

const {act} = renderer;

describe("Welcome page component", () => {
	test('Affichage du menu de connexion', () => {
		let welcomePage = renderer.create(<Welcome/>);
		let welcomePageJson = welcomePage.toJSON();
		
		expect(typeof welcomePageJson).toBe("object");
		expect(welcomePageJson.children.length).toBe(2);
		
		act(()=>{welcomePageJson.children[1].props.onClick();});
		welcomePage.update(<Welcome/>);
		welcomePageJson = welcomePage.toJSON();

		expect(welcomePageJson.children.length).toBe(3);
		
		/********************************************************************************
		*	Je conseille d'utiliser enzyme pour tester les evenements comme le click	*
		********************************************************************************/
	});
});