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
import FCEdinburgh from "../screens/teams/League-One/FCEdinburgh";
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
import MotherwellForm from "../screens/VisitForm/Premiership/MotherwellForm";
import RangersForm from "../screens/VisitForm/Premiership/RangersForm";
import RossCountyForm from "../screens/VisitForm/Premiership/RossCountyForm";
import StJohnstoneForm from "../screens/VisitForm/Premiership/StJohnstoneForm";
import StMirrenForm from "../screens/VisitForm/Premiership/StMirrenForm";
import ArbroathForm from "../screens/VisitForm/Championship/ArbroathForm";
import AyrForm from "../screens/VisitForm/Championship/AyrForm";
import CoveRangersForm from "../screens/VisitForm/Championship/CoveRangersForm";
import DundeeForm from "../screens/VisitForm/Championship/DundeeForm";
import MortonForm from "../screens/VisitForm/Championship/MortonForm";
import HamiltonForm from "../screens/VisitForm/Championship/HamiltonForm";
import InvernessForm from "../screens/VisitForm/Championship/InvernessForm";
import PartickThistleForm from "../screens/VisitForm/Championship/PartickThistleForm";
import QueensParkForm from "../screens/VisitForm/Championship/QueensParkForm";
import RaithRoversForm from "../screens/VisitForm/Championship/RaithRoversForm";
import AirdrieForm from "../screens/VisitForm/League-One/AirdrieForm";
import AlloaForm from "../screens/VisitForm/League-One/AlloaForm";
import ClydeForm from "../screens/VisitForm/League-One/ClydeForm";
import DunfermlineForm from "../screens/VisitForm/League-One/DunfermlineForm";
import FalkirkForm from "../screens/VisitForm/League-One/FalkirkForm";
import FcEdinburghForm from "../screens/VisitForm/League-One/FCEdinburghForm";
import KeltyHeartsForm from "../screens/VisitForm/League-One/KeltyHeartsForm";
import MontroseForm from "../screens/VisitForm/League-One/MontroseForm";
import PeterheadForm from "../screens/VisitForm/League-One/PeterheadForm";
import QueenOfTheSouthForm from "../screens/VisitForm/League-One/QueenOfTheSouthForm";
import AlbionRoversForm from "../screens/VisitForm/League-Two/AlbionRoversForm";
import AnnanForm from "../screens/VisitForm/League-Two/AnnanForm";
import BonnyriggRoseForm from "../screens/VisitForm/League-Two/BonnyriggRoseForm";
import DumbartonForm from "../screens/VisitForm/League-Two/DumbartonForm";
import EastFifeForm from "../screens/VisitForm/League-Two/EastFifeForm";
import ElginCityForm from "../screens/VisitForm/League-Two/ElginCityForm";
import ForfarForm from "../screens/VisitForm/League-Two/ForfarForm";
import StenhousemuirForm from "../screens/VisitForm/League-Two/StenhousemuirForm";
import StirlingForm from "../screens/VisitForm/League-Two/StirlingForm";
import StranraerForm from "../screens/VisitForm/League-Two/StranraerForm";

//Query Pages
import AberdeenQuery from "../screens/VisitForm/QueryResults/Premiership/AberdeenQuery";
import CelticQuery from "../screens/VisitForm/QueryResults/Premiership/CelticQuery";
import DundeeUnitedQuery from "../screens/VisitForm/QueryResults/Premiership/DundeeUnitedQuery";
import HeartsQuery from "../screens/VisitForm/QueryResults/Premiership/HeartsQuery";
import HibsQuery from "../screens/VisitForm/QueryResults/Premiership/HibsQuery";
import KillieQuery from "../screens/VisitForm/QueryResults/Premiership/KillieQuery";
import LiviQuery from "../screens/VisitForm/QueryResults/Premiership/LiviQuery";
import MotherwellQuery from "../screens/VisitForm/QueryResults/Premiership/MotherwellQuery";
import RangersQuery from "../screens/VisitForm/QueryResults/Premiership/RangersQuery";
import RossCountyQuery from "../screens/VisitForm/QueryResults/Premiership/RossCountyQuery";
import StJohnstoneQuery from "../screens/VisitForm/QueryResults/Premiership/StJohnstoneQuery";
import StMirrenQuery from "../screens/VisitForm/QueryResults/Premiership/StMirrenQuery";
import ArbroathQuery from "../screens/VisitForm/QueryResults/Championship/ArbroathQuery";
import AyrQuery from "../screens/VisitForm/QueryResults/Championship/AyrQuery";
import CoveRangersQuery from "../screens/VisitForm/QueryResults/Championship/CoveRangersQuery";
import DundeeQuery from "../screens/VisitForm/QueryResults/Championship/DundeeQuery";
import MortonQuery from "../screens/VisitForm/QueryResults/Championship/MortonQuery";
import HamiltonQuery from "../screens/VisitForm/QueryResults/Championship/HamiltonQuery";
import InvernessQuery from "../screens/VisitForm/QueryResults/Championship/InvernessQuery";
import PartickThistleQuery from "../screens/VisitForm/QueryResults/Championship/PartickThistleQuery";
import QueensParkQuery from "../screens/VisitForm/QueryResults/Championship/QueensParkQuery";
import RaithRoversQuery from "../screens/VisitForm/QueryResults/Championship/RaithRoversQuery";
import AirdrieQuery from "../screens/VisitForm/QueryResults/League-One/AirdrieQuery";
import AlloaQuery from "../screens/VisitForm/QueryResults/League-One/AlloaQuery";
import ClydeQuery from "../screens/VisitForm/QueryResults/League-One/ClydeQuery";
import DunfermlineQuery from "../screens/VisitForm/QueryResults/League-One/DunfermlineQuery";
import FalkirkQuery from "../screens/VisitForm/QueryResults/League-One/FalkirkQuery";
import KeltyHeartsQuery from "../screens/VisitForm/QueryResults/League-One/KeltyHeartsQuery";
import MontroseQuery from "../screens/VisitForm/QueryResults/League-One/MontroseQuery";
import PeterheadQuery from "../screens/VisitForm/QueryResults/League-One/PeterheadQuery";
import QueenOfTheSouthQuery from "../screens/VisitForm/QueryResults/League-One/QueenOfTheSouthQuery";
import AlbionRoversQuery from "../screens/VisitForm/QueryResults/League-Two/AlbionRoversQuery";
import AnnanQuery from "../screens/VisitForm/QueryResults/League-Two/AnnanQuery";
import BonnyriggRoseQuery from "../screens/VisitForm/QueryResults/League-Two/BonnyriggRoseQuery";
import DumbartonQuery from "../screens/VisitForm/QueryResults/League-Two/DumbartonQuery";
import EastFifeQuery from "../screens/VisitForm/QueryResults/League-Two/EastFifeQuery";
import ElginCityQuery from "../screens/VisitForm/QueryResults/League-Two/ElginCityQuery";
import ForfarQuery from "../screens/VisitForm/QueryResults/League-Two/ForfarQuery";
import StenhousemuirQuery from "../screens/VisitForm/QueryResults/League-Two/StenhousemuirQuery";
import StirlingQuery from "../screens/VisitForm/QueryResults/League-Two/StirlingQuery";
import StranraerQuery from "../screens/VisitForm/QueryResults/League-Two/StranraerQuery";

//Fixture Pages
import PremiershipFixtures from "../screens/PremiershipFixtures";
import ChampionshipFixtures from "../screens/ChampionshipFixtures";
import LeagueOneFixtures from "../screens/LeagueOneFixtures";
import LeagueTwoFixtures from "../screens/LeagueTwoFixtures";


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
            <MainStack.Screen name="FCEdinburgh" component={FCEdinburgh} />
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
            <MainStack.Screen name="MotherwellForm" component={MotherwellForm} />
            <MainStack.Screen name="RangersForm" component={RangersForm} />
            <MainStack.Screen name="RossCountyForm" component={RossCountyForm} />
            <MainStack.Screen name="StJohnstoneForm" component={StJohnstoneForm} />
            <MainStack.Screen name="StMirrenForm" component={StMirrenForm} />
            <MainStack.Screen name="ArbroathForm" component={ArbroathForm} />
            <MainStack.Screen name="AyrForm" component={AyrForm} />
            <MainStack.Screen name="CoveRangersForm" component={CoveRangersForm} />
            <MainStack.Screen name="DundeeForm" component={DundeeForm} />
            <MainStack.Screen name="MortonForm" component={MortonForm} />
            <MainStack.Screen name="HamiltonForm" component={HamiltonForm} />
            <MainStack.Screen name="InvernessForm" component={InvernessForm} />
            <MainStack.Screen name="PartickThistleForm" component={PartickThistleForm} />
            <MainStack.Screen name="QueensParkForm" component={QueensParkForm} />
            <MainStack.Screen name="RaithRoversForm" component={RaithRoversForm} />
            <MainStack.Screen name="AirdrieForm" component={AirdrieForm} />
            <MainStack.Screen name="AlloaForm" component={AlloaForm} />
            <MainStack.Screen name="ClydeForm" component={ClydeForm} />
            <MainStack.Screen name="DunfermlineForm" component={DunfermlineForm} />
            <MainStack.Screen name="FalkirkForm" component={FalkirkForm} />
            <MainStack.Screen name="FcEdinburghForm" component={FcEdinburghForm} />
            <MainStack.Screen name="KeltyHeartsForm" component={KeltyHeartsForm} />
            <MainStack.Screen name="MontroseForm" component={MontroseForm} />
            <MainStack.Screen name="PeterheadForm" component={PeterheadForm} />
            <MainStack.Screen name="QueenOfTheSouthForm" component={QueenOfTheSouthForm} />
            <MainStack.Screen name="AlbionRoversForm" component={AlbionRoversForm} />
            <MainStack.Screen name="AnnanForm" component={AnnanForm} />
            <MainStack.Screen name="BonnyriggRoseForm" component={BonnyriggRoseForm} />
            <MainStack.Screen name="DumbartonForm" component={DumbartonForm} />
            <MainStack.Screen name="EastFifeForm" component={EastFifeForm} />
            <MainStack.Screen name="ElginCityForm" component={ElginCityForm} />
            <MainStack.Screen name="ForfarForm" component={ForfarForm} />
            <MainStack.Screen name="StenhousemuirForm" component={StenhousemuirForm} />
            <MainStack.Screen name="StirlingForm" component={StirlingForm} />
            <MainStack.Screen name="StranraerForm" component={StranraerForm} />
            <MainStack.Screen name="AberdeenQuery" component={AberdeenQuery} />
            <MainStack.Screen name="CelticQuery" component={CelticQuery} />
            <MainStack.Screen name="DundeeUnitedQuery" component={DundeeUnitedQuery} />
            <MainStack.Screen name="HeartsQuery" component={HeartsQuery} />
            <MainStack.Screen name="HibsQuery" component={HibsQuery} />
            <MainStack.Screen name="KillieQuery" component={KillieQuery} />
            <MainStack.Screen name="LiviQuery" component={LiviQuery} />
            <MainStack.Screen name="MotherwellQuery" component={MotherwellQuery} />
            <MainStack.Screen name="RangersQuery" component={RangersQuery} />
            <MainStack.Screen name="RossCountyQuery" component={RossCountyQuery} />
            <MainStack.Screen name="StJohnstoneQuery" component={StJohnstoneQuery} />
            <MainStack.Screen name="StMirrenQuery" component={StMirrenQuery} />
            <MainStack.Screen name="ArbroathQuery" component={ArbroathQuery} />
            <MainStack.Screen name="AyrQuery" component={AyrQuery} />
            <MainStack.Screen name="CoveRangersQuery" component={CoveRangersQuery} />
            <MainStack.Screen name="DundeeQuery" component={DundeeQuery} />
            <MainStack.Screen name="MortonQuery" component={MortonQuery} />
            <MainStack.Screen name="HamiltonQuery" component={HamiltonQuery} />
            <MainStack.Screen name="InvernessQuery" component={InvernessQuery} />
            <MainStack.Screen name="PartickThistleQuery" component={PartickThistleQuery} />
            <MainStack.Screen name="QueensParkQuery" component={QueensParkQuery} />
            <MainStack.Screen name="RaithRoversQuery" component={RaithRoversQuery} />
            <MainStack.Screen name="AirdrieQuery" component={AirdrieQuery} />
            <MainStack.Screen name="AlloaQuery" component={AlloaQuery} />
            <MainStack.Screen name="ClydeQuery" component={ClydeQuery} />
            <MainStack.Screen name="DunfermlineQuery" component={DunfermlineQuery} />
            <MainStack.Screen name="FalkirkQuery" component={FalkirkQuery} />
            <MainStack.Screen name="KeltyHeartsQuery" component={KeltyHeartsQuery} />
            <MainStack.Screen name="MontroseQuery" component={MontroseQuery} />
            <MainStack.Screen name="PeterheadQuery" component={PeterheadQuery} />
            <MainStack.Screen name="QueenOfTheSouthQuery" component={QueenOfTheSouthQuery} />
            <MainStack.Screen name="AlbionRoversQuery" component={AlbionRoversQuery} />
            <MainStack.Screen name="AnnanQuery" component={AnnanQuery} />
            <MainStack.Screen name="BonnyriggRoseQuery" component={BonnyriggRoseQuery} />
            <MainStack.Screen name="DumbartonQuery" component={DumbartonQuery} />
            <MainStack.Screen name="EastFifeQuery" component={EastFifeQuery} />
            <MainStack.Screen name="ElginCityQuery" component={ElginCityQuery} />
            <MainStack.Screen name="ForfarQuery" component={ForfarQuery} />
            <MainStack.Screen name="StenhousemuirQuery" component={StenhousemuirQuery} />
            <MainStack.Screen name="StirlingQuery" component={StirlingQuery} />
            <MainStack.Screen name="StranraerQuery" component={StranraerQuery} />
            <MainStack.Screen name="PremiershipFixtures" component={PremiershipFixtures} />
            <MainStack.Screen name="ChampionshipFixtures" component={ChampionshipFixtures} />
            <MainStack.Screen name="LeagueOneFixtures" component={LeagueOneFixtures} />
            <MainStack.Screen name="LeagueTwoFixtures" component={LeagueTwoFixtures} />

            
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
