'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import Something from '../src/client/firsttry.jsx'

test('Ajout de titre', () => {
	const wrapper = renderer
    .create(<Something/>).toJSON();
	expect(typeof wrapper).toBe("object");
});

 test('Changement de couleur', () => {
	 const wrapper = renderer
    .create(<Something/>).toJSON();
	expect(wrapper.props.changeColorClass()).toBe("deepskyblueColor");
}); 