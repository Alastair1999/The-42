import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from "../src/screens/Home"

// this test ensures that the UI does not change unexpectedly

test('renders correctly', () => {
  const tree = TestRenderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

// this tests that a form submission page can be accessed when a badge has been clicked
it('should go to ross county fc visit form submission page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Home navigation={navigation}/>)

  const rossCountyOpacity = page.getByTestId('rossCountyOpacity')

  fireEvent.press(rossCountyOpacity);

  expect (navigation.navigate).toHaveBeenCalledWith("RossCountyForm");

});

// this tests that a club information page can be accessed when a badge has been clicked
it('should go to ross county fc club information page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Home navigation={navigation}/>)

  const rossCountyOpacity1 = page.getByTestId('rossCountyOpacity1')

  fireEvent.press(rossCountyOpacity1);

  expect (navigation.navigate).toHaveBeenCalledWith("RossCounty");

});

// this tests that the sign out button works
it('should go to the login page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Home navigation={navigation}/>)

  const signOutButton = page.getByTestId("signOutButton")

  fireEvent.press(signOutButton);

  expect (navigation.navigate).toHaveBeenCalledWith("Login");

});




