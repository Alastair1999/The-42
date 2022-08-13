import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "@rneui/themed";


export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [isChecked, setChecked]=useState(false);
  const [aberdeen, setAberdeen] = useState(false);
  const [celtic, setCeltic] = useState(false);
  const [dundeeunited, setDundeeUnited] = useState(false);
  const [hearts, setHearts] = useState(false);
  const [hibernian, setHibernian] = useState(false);
  const [kilmarnock, setKilmarnock] = useState(false);
  const [livingston, setLivingston] = useState(false);
  const [motherwell, setMotherwell] = useState(false);
  const [rangers, setRangers] = useState(false);
  const [rossCounty, setRossCounty] = useState(false);
  const [stJohnstone, setStJohnstone] = useState(false);
  const [stMirren, setStMirren] = useState(false);
  const [arbroath, setArbroath] = useState(false);
  const [ayr, setAyr] = useState(false);
  const [cove, setCove] = useState(false);
  const [dundee, setDundee] = useState(false);
  const [morton, setMorton] = useState(false);
  const [hamilton, setHamilton] = useState(false);
  const [inverness, setInverness] = useState(false);
  const [partick, setPartick] = useState(false);
  const [queensPark, setQueensPark] = useState(false);
  const [raith, setRaith] = useState(false);
  const [airdrie, setAirdrie] = useState(false);
  const [alloa, setAlloa] = useState(false);
  const [clyde, setClyde] = useState(false);
  const [dunfermline, setDunfermline] = useState(false);
  const [falkirk, setFalkirk] = useState(false);
  const [kelty, setKelty] = useState(false);
  const [FcEdinburgh, setFcEdinburgh] = useState(false);
  const [montrose, setMontrose] = useState(false);
  const [peterhead, setPeterhead] = useState(false);
  const [QueenOfTheSouth, setQueenOfTheSouth] = useState(false);
  const [albionRovers, setAlbionRovers] = useState(false);
  const [annan, setAnnan] = useState(false);
  const [bonnyrigg, setBonnyrigg] = useState(false);
  const [dumbarton, setDumbarton] = useState(false);
  const [eastFife, setEastFife] = useState(false);
  const [elgin, setElgin] = useState(false);
  const [forfar, setForfar] = useState(false);
  const [stenhousemuir, setStenhousemuir] = useState(false);
  const [stirling, setStirling] = useState(false);
  const [stranraer, setStranraer] = useState(false);


  
  
  return (
    <Layout>
      <TopNav
        middleContent="Team Checklist"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View style={styles.container}>
        <ScrollView>
          <View style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Text
            fontWeight="bold"
            style={{
              color: 'black',
              fontSize: 24,
            }}
            >Cinch Premiership</Text>
          </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Aberdeen");
              }}
              style={styles.teamStyle}
              >Aberdeen</Text>
              <CheckBox
              checked={aberdeen}
              checkedColor="green"
              onPress={() => setAberdeen(!aberdeen)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Celtic");
              }}
              style={styles.teamStyle}
              >Celtic</Text>
              <CheckBox
              checked={celtic}
              checkedColor="green"
              onPress={() => setCeltic(!celtic)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("DundeeUnited");
              }}
              style={styles.teamStyle}
              >Dundee United</Text>
              <CheckBox
              checked={dundeeunited}
              checkedColor="green"
              onPress={() => setDundeeUnited(!dundeeunited)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              testID="heartsOpacity"
              onPress={() => {
                navigation.navigate("HeartOfMidlothian");
              }}
              style={styles.teamStyle}
              >Heart of Midlothian</Text>
              <CheckBox
              checked={hearts}
              checkedColor="green"
              onPress={() => setHearts(!hearts)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Hibernian");
              }}
              style={styles.teamStyle}
              >Hibernian</Text>
              <CheckBox
              checked={hibernian}
              checkedColor="green"
              onPress={() => setHibernian(!hibernian)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Kilmarnock");
              }}
              style={styles.teamStyle}
              >Kilmarnock</Text>
              <CheckBox
              checked={kilmarnock}
              checkedColor="green"
              onPress={() => setKilmarnock(!kilmarnock)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Livingston");
              }}
              style={styles.teamStyle}
              >Livingston</Text>
              <CheckBox
              checked={livingston}
              checkedColor="green"
              onPress={() => setLivingston(!livingston)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Motherwell");
              }}
              style={styles.teamStyle}
              >Motherwell</Text>
              <CheckBox
              checked={motherwell}
              checkedColor="green"
              onPress={() => setMotherwell(!motherwell)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Rangers");
              }}
              style={styles.teamStyle}
              >Rangers</Text>
              <CheckBox
              checked={rangers}
              checkedColor="green"
              onPress={() => setRangers(!rangers)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("RossCounty");
              }}
              style={styles.teamStyle}
              >Ross County</Text>
              <CheckBox
              checked={rossCounty}
              checkedColor="green"
              onPress={() => setRossCounty(!rossCounty)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("StJohnstone");
              }}
              style={styles.teamStyle}
              >St Johnstone</Text>
              <CheckBox
              checked={stJohnstone}
              checkedColor="green"
              onPress={() => setStJohnstone(!stJohnstone)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("StMirren");
              }}
              style={styles.teamStyle}
              >St Mirren</Text>
              <CheckBox
              checked={stMirren}
              checkedColor="green"
              onPress={() => setStMirren(!stMirren)}
              />
            </View>

            <View style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Text
            fontWeight="bold"
            style={{
              color: 'black',
              fontSize: 24,
            }}
            >Cinch Championship</Text>
          </View>
          <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Arbroath");
              }}
              style={styles.teamStyle}
              >Arbroath</Text>
              <CheckBox
              checked={arbroath}
              checkedColor="green"
              onPress={() => setArbroath(!arbroath)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("AyrUnited");
              }}
              style={styles.teamStyle}
              >Ayr</Text>
              <CheckBox
              checked={ayr}
              checkedColor="green"
              onPress={() => setAyr(!ayr)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("CoveRangers");
              }}
              style={styles.teamStyle}
              >Cove Rangers</Text>
              <CheckBox
              checked={cove}
              checkedColor="green"
              onPress={() => setCove(!cove)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Dundee");
              }}
              style={styles.teamStyle}
              >Dundee</Text>
              <CheckBox
              checked={dundee}
              checkedColor="green"
              onPress={() => setDundee(!dundee)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("GreenockMorton");
              }}
              style={styles.teamStyle}
              >Greenock Morton</Text>
              <CheckBox
              checked={morton}
              checkedColor="green"
              onPress={() => setMorton(!morton)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("HamiltonAccies");
              }}
              style={styles.teamStyle}
              >Hamilton Academical</Text>
              <CheckBox
              checked={hamilton}
              checkedColor="green"
              onPress={() => setHamilton(!hamilton)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Inverness");
              }}
              style={styles.teamStyle}
              >Inverness Caledonian Thistle</Text>
              <CheckBox
              checked={inverness}
              checkedColor="green"
              onPress={() => setInverness(!inverness)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("PartickThistle");
              }}
              style={styles.teamStyle}
              >Partick Thistle</Text>
              <CheckBox
              checked={partick}
              checkedColor="green"
              onPress={() => setPartick(!partick)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("QueensPark");
              }}
              style={styles.teamStyle}
              >Queen's Park</Text>
              <CheckBox
              checked={queensPark}
              checkedColor="green"
              onPress={() => setQueensPark(!queensPark)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("RaithRovers");
              }}
              style={styles.teamStyle}
              >Raith Rovers</Text>
              <CheckBox
              checked={raith}
              checkedColor="green"
              onPress={() => setRaith(!raith)}
              />
            </View>

            <View style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Text
            fontWeight="bold"
            style={{
              color: 'black',
              fontSize: 24,
            }}
            >Cinch League One</Text>
          </View>
          <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Airdrie");
              }}
              style={styles.teamStyle}
              >Airdrie</Text>
              <CheckBox
              checked={airdrie}
              checkedColor="green"
              onPress={() => setAirdrie(!airdrie)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Alloa");
              }}
              style={styles.teamStyle}
              >Alloa</Text>
              <CheckBox
              checked={alloa}
              checkedColor="green"
              onPress={() => setAlloa(!alloa)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Clyde");
              }}
              style={styles.teamStyle}
              >Clyde </Text>
              <CheckBox
              checked={clyde}
              checkedColor="green"
              onPress={() => setClyde(!clyde)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Dunfermline");
              }}
              style={styles.teamStyle}
              >Dunfermline Athletic</Text>
              <CheckBox
              checked={dunfermline}
              checkedColor="green"
              onPress={() => setDunfermline(!dunfermline)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Falkirk");
              }}
              style={styles.teamStyle}
              >Falkirk</Text>
              <CheckBox
              checked={falkirk}
              checkedColor="green"
              onPress={() => setFalkirk(!falkirk)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("FCEdinburgh");
              }}
              style={styles.teamStyle}
              >FC Edinburgh</Text>
              <CheckBox
              checked={FcEdinburgh}
              checkedColor="green"
              onPress={() => setFcEdinburgh(!FcEdinburgh)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("KeltyHearts");
              }}
              style={styles.teamStyle}
              >Kelty Hearts</Text>
              <CheckBox
              checked={kelty}
              checkedColor="green"
              onPress={() => setKelty(!kelty)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Montrose");
              }}
              style={styles.teamStyle}
              >Montrose</Text>
              <CheckBox
              checked={montrose}
              checkedColor="green"
              onPress={() => setMontrose(!montrose)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Peterhead");
              }}
              style={styles.teamStyle}
              >Peterhead</Text>
              <CheckBox
              checked={raith}
              checkedColor="green"
              onPress={() => setPeterhead(!peterhead)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("QueenOfTheSouth");
              }}
              style={styles.teamStyle}
              >Queen of the South</Text>
              <CheckBox
              checked={QueenOfTheSouth}
              checkedColor="green"
              onPress={() => setQueenOfTheSouth(!QueenOfTheSouth)}
              />
            </View>

            <View style={{
            alignItems: "center",
            justifyContent: "center",
          }}
          >
          <Text
            fontWeight="bold"
            style={{
              color: 'black',
              fontSize: 24,
            }}
            >Cinch League Two</Text>
          </View>

          <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("AlbionRovers");
              }}
              style={styles.teamStyle}
              >Albion Rovers</Text>
              <CheckBox
              checked={albionRovers}
              checkedColor="green"
              onPress={() => setAlbionRovers(!albionRovers)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("AnnanAthletic");
              }}
              style={styles.teamStyle}
              >Annan Athletic</Text>
              <CheckBox
              checked={annan}
              checkedColor="green"
              onPress={() => setAnnan(!annan)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("BonnyriggRose");
              }}
              style={styles.teamStyle}
              >Bonnyrigg Rose</Text>
              <CheckBox
              checked={bonnyrigg}
              checkedColor="green"
              onPress={() => setBonnyrigg(!bonnyrigg)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Dumbarton");
              }}
              style={styles.teamStyle}
              >Dumbarton</Text>
              <CheckBox
              checked={dumbarton}
              checkedColor="green"
              onPress={() => setDumbarton(!dumbarton)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("EastFife");
              }}
              style={styles.teamStyle}
              >East Fife</Text>
              <CheckBox
              checked={eastFife}
              checkedColor="green"
              onPress={() => setEastFife(!eastFife)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("ElginCity");
              }}
              style={styles.teamStyle}
              >Elgin City</Text>
              <CheckBox
              checked={elgin}
              checkedColor="green"
              onPress={() => setElgin(!elgin)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("ForfarAthletic");
              }}
              style={styles.teamStyle}
              >Forfar Athletic</Text>
              <CheckBox
              checked={forfar}
              checkedColor="green"
              onPress={() => setForfar(!forfar)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Stenhousemuir");
              }}
              style={styles.teamStyle}
              >Stenhousemuir</Text>
              <CheckBox
              checked={stenhousemuir}
              checkedColor="green"
              onPress={() => setStenhousemuir(!stenhousemuir)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("StirlingAlbion");
              }}
              style={styles.teamStyle}
              >Stirling Albion</Text>
              <CheckBox
              checked={stirling}
              checkedColor="green"
              onPress={() => setStirling(!stirling)}
              />
            </View>
            <View style={styles.checkboxStyle}>
              <Text
              onPress={() => {
                navigation.navigate("Stranraer");
              }}
              style={styles.teamStyle}
              >Stranraer</Text>
              <CheckBox
              checked={stranraer}
              checkedColor="green"
              onPress={() => setStranraer(!stranraer)}
              />
            </View>

            



          </ScrollView>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    //backgroundColor: 'red',
    justifyContent: 'space-around',
    backgroundColor: 'fff',
  },

  leagueTitleStyle: {
    alignItems: 'center',
  },

  teamStyles: {
    color: 'black',
    fontSize: 14,
    alignItems: 'flex-start'
  },

  section: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center'
  },

  checkboxStyle:{
    flexDirection: 'row',
    marginLeft: 5,
  },

  teamStyle:{
    alignSelf: 'center',
    fontSize: 18,

  }
})