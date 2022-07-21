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
import Livingston from "../screens/teams/Premiership/Livingston";
import Motherwell from "../screens/teams/Premiership/Motherwell";
import Rangers from "../screens/teams/Premiership/Rangers";
import RossCounty from "../screens/teams/Premiership/RossCounty";
import StJohnstone from "../screens/teams/Premiership/StJohnstone";
import StMirren from "../screens/teams/Premiership/StMirren";

//Team Screens - Cinch Championship
import Arbroath from "../screens/teams/Championship/Arbroath";
import AyrUnited from "../screens/teams/Championship/AyrUnited";
import CoveRangers from "../screens/teams/Championship/CoveRangers";
import Dundee from "../screens/teams/Championship/Dundee";
import GreenockMorton from "../screens/teams/Championship/GreenockMorton";
import HamiltonAccies from "../screens/teams/Championship/HamiltonAccies";
import Inverness from "../screens/teams/Championship/Inverness";
import PartickThistle from "../screens/teams/Championship/PartickThistle";
import QueensPark from "../screens/teams/Championship/QueensPark";
import RaithRovers from "../screens/teams/Championship/RaithRovers";

//Team Screens - Cinch League One
import Airdrie from "../screens/teams/League-One/Airdrie";
import Alloa from "../screens/teams/League-One/Alloa";
import Clyde from "../screens/teams/League-One/Clyde";
import Dunfermline from "../screens/teams/League-One/Dunfermline";
import Falkirk from "../screens/teams/League-One/Falkirk";
import FcEdinburgh from "../screens/teams/League-One/FCEdinburgh";
import KeltyHearts from "../screens/teams/League-One/KeltyHearts";
import Montrose from "../screens/teams/League-One/Montrose";
import Peterhead from "../screens/teams/League-One/Peterhead";
import QueenOfTheSouth from "../screens/teams/League-One/QueenOfTheSouth";

//Team Screens - Cinch League Two
import AlbionRovers from "../screens/teams/League-Two/AlbionRovers";
import AnnanAthletic from "../screens/teams/League-Two/AnnanAthletic";
import BonnyriggRose from "../screens/teams/League-Two/BonnyriggRose";
import Dumbarton from "../screens/teams/League-Two/Dumbarton";
import EastFife from "../screens/teams/League-Two/EastFife";
import ElginCity from "../screens/teams/League-Two/ElginCity";
import ForfarAthletic from "../screens/teams/League-Two/ForfarAthletic";
import Stenhousemuir from "../screens/teams/League-Two/Stenhousemuir";
import StirlingAlbion from "../screens/teams/League-Two/StirlingAlbion";
import Stranraer from "../screens/teams/League-Two/Stranraer";

//Form Pages
import AberdeenForm from "../screens/VisitForm/Premiership/AberdeenForm";
import CelticForm from "../screens/VisitForm/Premiership/CelticForm";
import DundeeUnitedForm from "../screens/VisitForm/Premiership/DundeeUnitedForm";
import HeartsForm from "../screens/VisitForm/Premiership/HeartsForm";
import HibsForm from "../screens/VisitForm/Premiership/HibsForm";
import KillieForm from "../screens/VisitForm/Premiership/KillieForm";
import LiviForm from "../screens/VisitForm/Premiership/LiviForm";

//Query Pages
import AberdeenQuery from "../screens/VisitForm/QueryResults/Premiership/AberdeenQuery";
import CelticQuery from "../screens/VisitForm/QueryResults/Premiership/CelticQuery";
import DundeeUnitedQuery from "../screens/VisitForm/QueryResults/Premiership/DundeeUnitedQuery";
import HeartsQuery from "../screens/VisitForm/QueryResults/Premiership/HeartsQuery";
import HibsQuery from "../screens/VisitForm/QueryResults/Premiership/HibsQuery";
import KillieQuery from "../screens/VisitForm/QueryResults/Premiership/KillieQuery";
import LiviQuery from "../screens/VisitForm/QueryResults/Premiership/LiviQuery";


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
            <MainStack.Screen name="Livingston" component={Livingston} />
            <MainStack.Screen name="Motherwell" component={Motherwell} />
            <MainStack.Screen name="Rangers" component={Rangers} />
            <MainStack.Screen name="RossCounty" component={RossCounty} />
            <MainStack.Screen name="StJohnstone" component={StJohnstone} />
            <MainStack.Screen name="StMirren" component={StMirren} />
            <MainStack.Screen name="Arbroath" component={Arbroath} />
            <MainStack.Screen name="AyrUnited" component={AyrUnited} />
            <MainStack.Screen name ="CoveRangers" component={CoveRangers} />
            <MainStack.Screen name="Dundee" component={Dundee} />
            <MainStack.Screen name="GreenockMorton" component={GreenockMorton} />
            <MainStack.Screen name="HamiltonAccies" component={HamiltonAccies} />
            <MainStack.Screen name="Inverness" component={Inverness} />
            <MainStack.Screen name="PartickThistle" component={PartickThistle} />
            <MainStack.Screen name="QueensPark" component={QueensPark} />
            <MainStack.Screen name="RaithRovers" component={RaithRovers} />
            <MainStack.Screen name="Airdrie" component={Airdrie} />
            <MainStack.Screen name ="Alloa" component={Alloa} />
            <MainStack.Screen name="Clyde" component={Clyde} />
            <MainStack.Screen name="Dunfermline" component={Dunfermline} />
            <MainStack.Screen name="Falkirk" component={Falkirk} />
            <MainStack.Screen name="FcEdinburgh" component={FcEdinburgh} />
            <MainStack.Screen name="KeltyHearts" component={KeltyHearts} />
            <MainStack.Screen name="Montrose" component={Montrose} />
            <MainStack.Screen name="Peterhead" component={Peterhead} />
            <MainStack.Screen name="QueenOfTheSouth" component={QueenOfTheSouth} />
            <MainStack.Screen name="AlbionRovers" component={AlbionRovers} />
            <MainStack.Screen name="AnnanAthletic" component={AnnanAthletic} />
            <MainStack.Screen name="BonnyriggRose" component={BonnyriggRose} />
            <MainStack.Screen name="Dumbarton" component={Dumbarton} />
            <MainStack.Screen name="EastFife" component={EastFife} />
            <MainStack.Screen name="ElginCity" component={ElginCity} />
            <MainStack.Screen name="ForfarAthletic" component={ForfarAthletic} />
            <MainStack.Screen name="Stenhousemuir" component={Stenhousemuir} />
            <MainStack.Screen name="StirlingAlbion" component={StirlingAlbion} />
            <MainStack.Screen name="Stranraer" component={Stranraer} />
            <MainStack.Screen name="AberdeenForm" component={AberdeenForm} />
            <MainStack.Screen name="CelticForm" component={CelticForm} />
            <MainStack.Screen name="DundeeUnitedForm" component={DundeeUnitedForm} />
            <MainStack.Screen name="HeartsForm" component={HeartsForm} />
            <MainStack.Screen name="HibsForm" component={HibsForm} />
            <MainStack.Screen name="KillieForm" component={KillieForm} />
            <MainStack.Screen name="LiviForm" component={LiviForm} />
            <MainStack.Screen name="AberdeenQuery" component={AberdeenQuery} />
            <MainStack.Screen name="CelticQuery" component={CelticQuery} />
            <MainStack.Screen name="DundeeUnitedQuery" component={DundeeUnitedQuery} />
            <MainStack.Screen name="HeartsQuery" component={HeartsQuery} />
            <MainStack.Screen name="HibsQuery" component={HibsQuery} />
            <MainStack.Screen name="KillieQuery" component={KillieQuery} />
            <MainStack.Screen name="LiviQuery" component={LiviQuery} />
            
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
