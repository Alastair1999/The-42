import React from 'react';
import TestRenderer from 'react-test-renderer';
import LeagueTables from "../src/screens/LeagueTables";

// this test ensures that the UI does not change unexpectedly

test('renders correctly', () => {
  const tree = TestRenderer.create(<LeagueTables />).toJSON();
  expect(tree).toMatchSnapshot();
});