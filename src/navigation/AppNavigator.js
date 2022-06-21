import React, {useContext} from "react";
import {initializeApp, getApps} from "firebase/app";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { AuthContext } from "../provider/AuthProvider";

//Main Pages
import Home from "../screens/Home";
import Checklist from "../screens/Checklist";
import LeagueTables from "../screens/LeagueTables";
import Fixtures from "../screens/Fixtures";

//Auth Pages
import Login from "../screens/auth/Login";
import ForgetPassword from "../screens/auth/ForgetPassword";
import Register from "../screens/auth/Register";
import Loading from "../utils/Loading";

//Team Screens - Cinch Premiership
import Aberdeen from "../screens/teams/Premiership/Aberdeen";


//Firebase Details
const firebaseConfig = {
    apiKey: "AIzaSyAqknbHJvhnN8Euhrdm8XtPCI3-oa2r7U0",
    authDomain: "fir-auth-a05e0.firebaseapp.com",
    projectId: "fir-auth-a05e0",
    storageBucket: "fir-auth-a05e0.appspot.com",
    messagingSenderId: "912365762837",
    appId: "1:912365762837:web:a6a56d66befb675b53911c"
};
  if (getApps().length === 0) {
    initializeApp(firebaseConfig);
}

const AuthStack = createNativeStackNavigator();
const Auth = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AuthStack.Screen name = "Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
        </AuthStack.Navigator>
    );
};

const MainStack = createNativeStackNavigator();
const Main = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name = "Home" component={Home} />
            <MainStack.Screen name="Checklist" component={Checklist} />
            <MainStack.Screen name="Fixtures" component={Fixtures} />
            <MainStack.Screen name="LeagueTables" component={LeagueTables}/>
        </MainStack.Navigator>
    );
};

export default ()=> {
    const auth = useContext(AuthContext);
    const user = auth.user;
    return (
        <NavigationContainer>
            {user == null && <Loading/>}
            {user == false && <Auth/>}
            {user == true && <Main/>}
        </NavigationContainer>
    )
}
