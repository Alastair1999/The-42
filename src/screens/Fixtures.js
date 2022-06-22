import React from "react";
import {View,
ScrollView,
Image,
Text,
StyleSheet,
Dimensions,
}from "react-native";
import { TopNav, Layout } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Callout, Marker } from "react-native-maps";


export default function ({ navigation }) {
    return (
        <Layout>
            <TopNav
                middleContent="Fixtures"
                leftContent={
                    <Ionicons
                      name="chevron-back"
                      size={20}
                    />
                  }
                  leftAction={() => navigation.goBack()}
            />
            <ScrollView>
                <View style={styles.container}>
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
                            <Callout>
                                <Text>Aberdeen</Text>
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
                            <Callout>
                                <Text>Airdrieonians</Text>
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
                            <Callout>
                                <Text>Alloa</Text>
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
                            <Callout>
                                <Text>Arbroath</Text>
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
                            <Callout>
                                <Text>Ayr United</Text>
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
                            <Callout>
                                <Text>Celtic</Text>
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
                            <Callout>
                                <Text>Clyde</Text>
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
                            <Callout>
                                <Text>Cove Rangers</Text>
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
                            <Callout>
                                <Text>Dundee United</Text>
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
                            <Callout>
                                <Text>Dundee</Text>
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
                            <Callout>
                                <Text>Dunfermline Athletic</Text>
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
                            <Callout>
                                <Text>Falkirk</Text>
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
                            <Callout>
                                <Text>Greenock Morton</Text>
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
                            <Callout>
                                <Text>Hamilton Academical</Text>
                            </Callout>
                        </Marker>


                        <Marker 
                            coordinate={{
                                latitude: 55.93917,
                                longitude: -3.23222,
                            }}
                            pinColor = "#800000"
                            //image ={require('../../assets/club-badges/hearts.png')}
                        >
                            <Callout>
                                <Text>Heart of Midlothian</Text>
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
                            <Callout>
                                <Text>Hibernian</Text>
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
                            <Callout>
                                <Text>FC Edinburgh</Text>
                            </Callout>
                        </Marker>
                    </MapView>
                </View>
            </ScrollView>

            
        </Layout>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        //width: 500,
        //height: 200.
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });