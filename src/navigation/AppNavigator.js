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
import Celtic from "../screens/teams/Premiership/Celtic";
import Hibernian from "../screens/teams/Premiership/Hibernian";
import HeartOfMidlothian from "../screens/teams/Premiership/HeartOfMidlothian";
import DundeeUnited from "../screens/teams/Premiership/DundeeUnited";
import Kilmarnock from "../screens/teams/Premiership/Kilmarnock";

//Bottom Tab Navigation Bar
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {themeColor, useTheme} from "react-native-rapi-ui";
import BottomNavBarIcon from "../components/BottomNavBarIcon";
import BottomNavBarText from "../components/BottomNavBarText";


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
            <MainStack.Screen name ="MainTabs" component={MainTabs}/>
            <MainStack.Screen name ="HeartOfMidlothian" component={HeartOfMidlothian} />
            <MainStack.Screen name ="Hibernian" component={Hibernian} />
            <MainStack.Screen name ="Aberdeen" component={Aberdeen} />
            <MainStack.Screen name="Celtic" component={Celtic} />
            <MainStack.Screen name="DundeeUnited" component={DundeeUnited} />
            <MainStack.Screen name="Kilmarnock" component={Kilmarnock} />
            
        </MainStack.Navigator>
    );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
    const {isDarkmode} = useTheme();
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopColor: isDarkmode ? themeColor.dark100: "#c0c0c0",
                    backgroundColor: isDarkmode ? themeColor.dark200: "#ffffff",
                },
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: ({focused}) => (
                        <BottomNavBarText focused={focused} title="Home"/>
                    ),
                    tabBarIcon: ({focused}) => (
                        <BottomNavBarIcon focused={focused} icon={"md-home"}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="Checklist"
                component={Checklist}
                options={{
                    tabBarLabel: ({focused}) => (
                        <BottomNavBarText focused={focused} title="Checklist"/>
                    ),
                    tabBarIcon: ({focused}) => (
                        <BottomNavBarIcon focused={focused} icon={"md-list"}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="Fixtures"
                component={Fixtures}
                options={{
                    tabBarLabel: ({focused}) => (
                        <BottomNavBarText focused={focused} title="Fixtures"/>
                    ),
                    tabBarIcon: ({focused}) => (
                        <BottomNavBarIcon focused={focused} icon={"calendar"}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="League Tables"
                component={LeagueTables}
                options={{
                    tabBarLabel: ({focused}) => (
                        <BottomNavBarText focused={focused} title="League Tables"/>
                    ),
                    tabBarIcon: ({focused}) => (
                        <BottomNavBarIcon focused={focused} icon={"trophy"}/>
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}


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
