import React from 'react';
import TestRenderer from 'react-test-renderer';
import Fixtures from "../src/screens/Fixtures";
import PremiershipFixtures from "../../src/screens/PremiershipFixtures";

// this test ensures that the UI does not change unexpectedly

test('renders correctly', () => {
  const tree = TestRenderer.create(<Fixtures />).toJSON();
  expect(tree).toMatchSnapshot();
});

// these next 4 test ensures that the buttons for each of leagues work

it('should go to premiership fixtures page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Fixtures navigation={navigation}/>)

  const premiershipOpacity = page.getByTestId('premiershipOpacity')

  fireEvent.press(premiershipOpacity);

  expect (navigation.navigate).toHaveBeenCalledWith("PremiershipFixtures");

});

it('should go to championship fixtures page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Fixtures navigation={navigation}/>)

  const championshipOpacity = page.getByTestId('champtionshipOpacity')

  fireEvent.press(championshipOpacity);

  expect (navigation.navigate).toHaveBeenCalledWith("ChampionshipFixtures");

});

it('should go to league one fixtures page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Fixtures navigation={navigation}/>)

  const leagueOneOpacity = page.getByTestId('leagueOneOpacity')

  fireEvent.press(leagueOneOpacity);

  expect (navigation.navigate).toHaveBeenCalledWith("LeagueOneFixtures");

});

it('should go to league two fixtures page', () => {
  const navigation= {navigate: () => {}}
  spyOn(navigation, 'navigate')

  const page = render(<Fixtures navigation={navigation}/>)

  const leagueTwoOpacity = page.getByTestId('leagueTwoOpacity')

  fireEvent.press(leagueTwoOpacity);

  expect (navigation.navigate).toHaveBeenCalledWith("LeagueTwoFixtures");

});
