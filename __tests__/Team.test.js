import React from "react";
import HeartOfMidlothian from ".././src/screens/teams/Premiership/HeartOfMidlothian";

describe('individual team page', () => {

    it('should go to the view previous submissions page once clicked',() => {
        const navigation ={navigate: () => {}}
        spyOn (navigation, 'navigate');

        const page= render(<HeartOfMidlothian />)

        const viewSubmissionOpacity = page.getByTestId('viewSubmissionOpacity')

        fireEvent.press(viewSubmissionOpacity);

        expect(navigation.navigate).toHaveBeenCalledWith("HeartsQuery")
    })
});