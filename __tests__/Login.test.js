import React from "react";
import Login from "../src/screens/auth/Login"
import {render, fireEvent} from "@testing-library/react-native"
import Register from "../src/screens/auth/Register";

describe('login screen', () => {

    it('should go to the homepage once logged in',() => {
        const navigation ={navigate: () => {}}
        spyOn (navigation, 'navigate');

        const page= render(<Login />)

        const loginButton = page.getByTestId('loginButton')

        fireEvent.press(loginButton);

        expect(navigation.navigate).toHaveBeenCalledWith("Home")
    })

    it('should go to register page', () => {
        const navigation= {navigate: () => {}}
        spyOn(navigation, 'navigate')

        const page = render(<Login navigation={navigation}/>)

        const registerOpacity = page.getByTestId('registerOpacity')

        fireEvent.press(registerOpacity);

        expect (navigation.navigate).toHaveBeenCalledWith("Register");

    })

    it ('should go to forgt password page', () => {
        const navigation = {navigate: () => {}}
        spyOn(navigation, 'navigate')

        const page = render(<Register navigation={navigation}/>)

        const forgetPasswordOpacity = page.getByTestId('forgetPasswordOpacity')

        fireEvent.press(forgetPasswordOpacity);

        expect (navigation.navigate).toHaveBeenCalledWith("ForgetPassword");
    })

})