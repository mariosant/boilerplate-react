import 'jest-dom/extend-expect'; // eslint-disable-line import/no-unassigned-import
import {cleanup, render} from 'react-testing-library';
import React from 'react';

beforeEach(cleanup);

describe('placeholder', () => {
	test('works as expected', () => {
		const component = () => <div>Works</div>;
		const {debug} = render(component);

		debug();
	});
});
