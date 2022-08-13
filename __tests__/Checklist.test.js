import React from 'react';
import TestRenderer from 'react-test-renderer';
import Checklist from "../src/screens/Checklist"

// this test ensures that the UI does not change unexpectedly

test('renders correctly', () => {
  const tree = TestRenderer.create(<Checklist />).toJSON();
  expect(tree).toMatchSnapshot();
});

// this tests that a club information page can be accessed when a team has been clicked
it('should go to ross county fc visit form submission page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Checklist navigation={navigation}/>)

  const heartsOpacity = page.getByTestId('heartsOpacity')

  fireEvent.press(heartsOpacity);

  expect (navigation.navigate).toHaveBeenCalledWith("HeartOfMidlothian");

});