import React from "react";
import { View, Linking, ScrollView, StyleSheet, Image, Dimensions, SafeAreaView, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Callout, Marker } from "react-native-maps";


export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <TopNav
        middleContent="The 42"
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
        leftContent={
          <Ionicons
          name={"log-out"}
          size={24}
          color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => {
          signOut(auth);
        }

        }
      />
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <Section>
          <SectionContent>
            <Text fontWeight="bold" style={{}}>
              The number of stadiums visited is
            </Text>
          </SectionContent>
        </Section>

        <View>
                    <MapView style={styles.map} 
                    initialRegion ={{
                        latitude: 55.953251,
                        longitude: -3.2,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.065,
                    }}
                    >
                        <Marker
                            coordinate={{
                                latitude: 57.15917,
                                longitude: -2.08889,
                            }}
                            pinColor = "red"
                            //image ={require('../../assets/club-badges/aberdeen.png')}
                        >
                            <Image source={require("../../assets/club-badges/aberdeen.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Aberdeen {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Aberdeen");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("AberdeenForm");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.8597472,
                                longitude: -3.9597528,
                            }}
                            pinColor = "red"
                            //image ={require('../../assets/club-badges/.png')}
                        >
                            <Image source={require("../../assets/club-badges/airdrie.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Aidrieonians F.C. {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Airdrie");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Airdrie");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.86028,
                                longitude: -4.01139,
                            }}
                            pinColor = "yellow"
                            //image ={require('../../assets/club-badges/albion-rovers.png')}
                        >
                            <Image source={require("../../assets/club-badges/albion-rovers.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Albion Rovers</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.1166444,
                                longitude: -3.7786417,
                            }}
                            pinColor = "orange"
                            //image ={require('../../assets/club-badges/alloa.png')}
                        >
                            <Image source={require("../../assets/club-badges/alloa.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Alloa Athletic {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Alloa");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Alloa");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 54.99474,
                                longitude: -3.2613,
                            }}
                            pinColor = "yellow"
                            //image ={require('../../assets/club-badges/annan-athletic.png')}
                        >
                            <Image source={require("../../assets/club-badges/annan-athletic.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Annan Athletic</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.5522694,
                                longitude: -2.5915194,
                            }}
                            pinColor = "#800000"
                            //image ={require('../../assets/club-badges/arbroath.png')}
                        >
                            <Image source={require("../../assets/club-badges/arbroath.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Arbroath {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Arbroath");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Arbroath");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.4694,
                                longitude: -4.6200,
                            }}
                            pinColor = "white"
                            //image ={require('../../assets/club-badges/ayr.png')}
                        >
                            <Image source={require("../../assets/club-badges/ayr.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Ayr United {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("AyrUnited");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("AyrUnited");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.87471,
                                longitude: -3.10333,
                            }}
                            pinColor = "red"
                            //image ={require('../../assets/club-badges/bonnyrigg-rose.png')}
                        >
                            <Image source={require("../../assets/club-badges/bonnyrigg-rose.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Bonnyrigg Rose</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.8497,
                                longitude: -4.2055,
                            }}
                            pinColor = "green"
                            //image ={require('../../assets/club-badges/celtic.png')}
                        >
                            <Image source={require("../../assets/club-badges/celtic.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Celtic {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Celtic");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Celtic");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.9455,
                                longitude: -4.0376,
                            }}
                            pinColor = "red"
                            //image ={require('../../assets/club-badges/clyde.png')}
                        >
                            <Image source={require("../../assets/club-badges/clyde.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Clyde F.C. {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Clyde");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Clyde");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 57.11296,
                                longitude: -2.09660,
                            }}
                            pinColor = "blue"
                            //image ={require('../../assets/club-badges/cove-rangers.png')}
                        >
                            <Image source={require("../../assets/club-badges/cove-rangers.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Cove Rangers {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("CoveRangers");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("CoveRangers");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.9383,
                                longitude: -4.5619,
                            }}
                            pinColor = "yellow"
                            //image ={require('../../assets/club-badges/dumbarton.png')}
                        >
                            <Image source={require("../../assets/club-badges/dumbarton.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Dumbarton</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.4747,
                                longitude: -2.9690,
                            }}
                            pinColor = "orange"
                            //image ={require('../../assets/club-badges/dundee-united.png')}
                        >
                            <Image source={require("../../assets/club-badges/dundee-united.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Dundee United{"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("DundeeUnited");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("DundeeUnited");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.4750,
                                longitude: -2.9722,
                            }}
                            pinColor = "#1a315a"
                            //image ={require('../../assets/club-badges/dundee.png')}
                        >
                            <Image source={require("../../assets/club-badges/dundee.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Dundee {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Dundee");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Dundee");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.0752,
                                longitude: -3.4414,
                            }}
                            pinColor = "black"
                            //image ={require('../../assets/club-badges/dunfermline.png')}
                        >
                            <Image source={require("../../assets/club-badges/dunfermline.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Dunfermline Athletic {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Dunfermline");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Dunfermline");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.1887,
                                longitude: -2.9994,
                            }}
                            pinColor = "yellow"
                            //image ={require('../../assets/club-badges/east-fife.png')}
                        >
                            <Image source={require("../../assets/club-badges/east-fife.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>East Fife</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 57.6518,
                                longitude: -3.3208,
                            }}
                            pinColor = "black"
                            //image ={require('../../assets/club-badges/elgin-city.png')}
                        >
                            <Image source={require("../../assets/club-badges/elgin-city.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Elgin City</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.0054,
                                longitude: -3.7526,
                            }}
                            pinColor = "black"
                            //image ={require('../../assets/club-badges/falkirk.png')}
                        >
                            <Image source={require("../../assets/club-badges/falkirk.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Falkirk F.C. {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Falkirk");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Falkirk");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.6522,
                                longitude: -2.8849,
                            }}
                            pinColor = "#ADD8E6"
                            //image ={require('../../assets/club-badges/forfar-athletic.png')}
                        >
                            <Image source={require("../../assets/club-badges/forfar-athletic.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Forfar Atheltic</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.9413278,
                                longitude: -4.7268111,
                            }}
                            pinColor = "white"
                            //image ={require('../../assets/club-badges/greenock-morton.png')}
                        >
                            <Image source={require("../../assets/club-badges/greenock-morton.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Greenock Morton {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("GreenockMorton");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("GreenockMorton");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.7821,
                                longitude: -4.0584,
                            }}
                            pinColor = "red"
                            //image ={require('../../assets/club-badges/hamilton.png')}
                        >
                            <Image source={require("../../assets/club-badges/hamilton.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Hamilton Academical {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("HamiltonAccies");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("HamiltonAccies");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>


                        <Marker 
                            coordinate={{
                                latitude: 55.93917,
                                longitude: -3.23222,
                            }}
                            pinColor = "#800000"
                            //image= {require('../../assets/club-badges/hearts.png')} style={{width: 35, height: 35}}
                        >
                            <Image source={require("../../assets/club-badges/hearts.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Heart of Midlothian {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("HeartOfMidlothian");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("HeartOfMidlothian");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.96167,
                                longitude: -3.16556,
                            }}
                            pinColor = "green"
                            //image ={require('../../assets/club-badges/hibernian.png')}
                        >
                            <Image source={require("../../assets/club-badges/hibernian.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Hibernian {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Hibernian");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Hibernian");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 57.4955,
                                longitude: -4.2167,
                            }}
                            pinColor = "blue"
                            //image ={require('../../assets/club-badges/inverness.png')}
                        >
                            
                            <Image source={require("../../assets/club-badges/inverness.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Inverness Caley Thistle {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Inverness");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Inverness");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        
                            
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.1360033508,
                                longitude: -3.37868280709,
                            }}
                            pinColor = "#800000"
                            //image ={require('../../assets/club-badges/kelty-hearts.png')}
                        >
                            <Image source={require("../../assets/club-badges/kelty-hearts.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Kelty Hearts {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("KeltyHearts");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("KeltyHearts");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.6025325899,
                                longitude: -4.50487131384,
                            }}
                            pinColor = "#0e00f7"
                            //image ={require('../../assets/club-badges/kilmarnock.png')}
                        >
                            <Image source={require("../../assets/club-badges/kilmarnock.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Kilmarnock FC {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Kilmarnock");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Kilmarnock");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.88649,
                                longitude: -3.52283,
                            }}
                            pinColor = "#ffcc00"
                            //image ={require('../../assets/club-badges/livingston.png')}
                        >
                            <Image source={require("../../assets/club-badges/livingston.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Livingston FC {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Livingston");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Livingston");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.7139,
                                longitude: -2.4601,
                            }}
                            pinColor = "blue"
                            //image ={require('../../assets/club-badges/montrose.png')}
                        >
                            <Image source={require("../../assets/club-badges/montrose.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Montrose F.C. {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Montrose");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Montrose");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.7804,
                                longitude: -3.9811,
                            }}
                            pinColor = "#fbba2d"
                            //image ={require('../../assets/club-badges/motherwell.png')}
                        >
                            <Image source={require("../../assets/club-badges/motherwell.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Motherwell FC {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Motherwell");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Motherwell");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.8816,
                                longitude: -4.2695,
                            }}
                            pinColor = "yellow"
                            //image ={require('../../assets/club-badges/partick-thistle.png')}
                        >
                            <Image source={require("../../assets/club-badges/partick-thistle.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Partick Thistle {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("PartickThistle");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("PartickThistle");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 57.5116944,
                                longitude: -1.7958472,
                            }}
                            pinColor = "blue"
                            //image ={require('../../assets/club-badges/peterhead.png')}
                        >
                            <Image source={require("../../assets/club-badges/peterhead.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Peterhead F.C. {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Peterhead");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Peterhead");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.0709,
                                longitude: -3.6263,
                            }}
                            pinColor = "blue"
                            //image ={require('../../assets/club-badges/queen-of-the-south.png')}
                        >
                            <Image source={require("../../assets/club-badges/queen-of-the-south.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Queen of the South {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("QueenOfTheSouth");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("QueenOfTheSouth");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.8249,
                                longitude: -4.2562,
                            }}
                            pinColor = "black"
                            //image ={require('../../assets/club-badges/queens-park.png')}
                        >
                            <Image source={require("../../assets/club-badges/queens-park.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Queens Park {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("QueensPark");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("QueensPark");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.100301127,
                                longitude: -3.16823856859,
                            }}
                            pinColor = "#02075d"
                            //image ={require('../../assets/club-badges/raith-rovers.png')}
                        >
                            <Image source={require("../../assets/club-badges/raith-rovers.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Raith Rovers {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("RaithRovers");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("RaithRovers");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.8532,
                                longitude: -4.3093,
                            }}
                            pinColor = "#1b458f"
                            //image ={require('../../assets/club-badges/rangers.png')}
                        >
                            <Image source={require("../../assets/club-badges/rangers.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Rangers {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Rangers");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Rangers");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 57.5959776581,
                                longitude: -4.41998004913,
                            }}
                            pinColor = "#040957"
                            //image ={require('../../assets/club-badges/ross-county.png')}
                        >
                            <Image source={require("../../assets/club-badges/ross-county.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>Ross County {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("RossCounty");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("RossCounty");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.4096861,
                                longitude: -3.4769278,
                            }}
                            pinColor = "#243f90"
                            //image ={require('../../assets/club-badges/st-johnstone.png')}
                        >
                            <Image source={require("../../assets/club-badges/st-johnstone.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>St Johnstone {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("StJohnstone");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("StJohnstone");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 55.8508,
                                longitude: -4.4436,
                            }}
                            pinColor = "white"
                            //image ={require('../../assets/club-badges/st-mirren.png')}
                        >
                            <Image source={require("../../assets/club-badges/st-mirren.png")} style={{height: 25, width: 25}}/>
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>St Mirren {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("StMirren");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("StMirren");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.0278,
                                longitude: -3.8146,
                            }}
                            pinColor = "#893f45"
                            //image ={require('../../assets/club-badges/stenhousemuir.png')}
                        >
                            <Image source={require("../../assets/club-badges/stenhousemuir.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Stenhousemuir</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 56.1190,
                                longitude: -3.9129,
                            }}
                            pinColor = "red"
                            //image ={require('../../assets/club-badges/stirling-albion.png')}
                        >
                            <Image source={require("../../assets/club-badges/stirling-albion.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Stirling Albion</Text>
                            </Callout>
                        </Marker>

                        <Marker 
                            coordinate={{
                                latitude: 54.9024,
                                longitude: -5.0129,
                            }}
                            pinColor = "blue"
                            //image ={require('../../assets/club-badges/stranraer.png')}
                        >
                            <Image source={require("../../assets/club-badges/stranraer.png")} style={{height: 25, width: 25}}/>
                            <Callout>
                                <Text>Stranraer FC</Text>
                            </Callout>
                        </Marker>


                        <Marker 
                            coordinate={{
                                latitude: 55.95694,
                                longitude: -3.15861,
                            }}
                            pinColor = "white"
                            //image ={require('../../assets/club-badges/hearts.png')}
                        >
                            <Callout style={styles.calloutStyle}>
                                <Text style={styles.calloutTitle}>F.C. Edinburgh {"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("FcEdinburgh");
                                }}
                              >
                                <Text>
                                  View Club Information {"\n"}
                                </Text>
                              </TouchableOpacity>
                              
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("FcEdinburgh");
                                }}
                              >
                                <Text>Add a submission</Text>
                              </TouchableOpacity>
                            </Callout>
                        </Marker>
                    </MapView>
                </View>
      </SafeAreaView>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
      //width: 500,
      //height: 500.
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  clubBadge: {
      width: 38,
      height: 38,
  },

  calloutStyle: {
      width: 130,
      height: 130,
  },

  calloutTitle: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 18,
  }

});