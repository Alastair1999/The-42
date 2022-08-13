import React from "react";
import {View,
ScrollView,
Image,
Text,
StyleSheet,
Dimensions,
TouchableOpacity,
}from "react-native";
import { TopNav, Layout } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

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
            <ScrollView contentContainerStyle style={styles.scroller}>
                {/* Adding buttons to select specific leagues */}
                <View style={styles.container}>
                    <Text style={styles.header}> Select a league to view fixtures</Text>

                    <View style={styles.opacityFormat}>
                        <TouchableOpacity
                        testID="premiershipOpacity"
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate("PremiershipFixtures");
                            }}
                        >
                            <Text style={styles.buttonText}>Cinch Premiership</Text>
                            <Image style={styles.leagueBadge}
                                resizeMode="contain"
                                source={require("../../assets/league-badges/premiership-logo.png")}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.opacityFormat}>
                    <TouchableOpacity
                    testID="championshipOpacity"
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate("ChampionshipFixtures");
                            }}
                        >
                            <Text style={styles.buttonText}>Cinch Championship</Text>
                            <Image style={styles.leagueBadge}
                                resizeMode="contain"
                                source={require("../../assets/league-badges/championship-logo.png")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.opacityFormat}>
                    <TouchableOpacity
                    testID="leagueOneOpacity"
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate("LeagueOneFixtures");
                            }}
                        >
                            <Text style={styles.buttonText}>Cinch League One</Text>
                            <Image style={styles.leagueBadge}
                                resizeMode="contain"
                                source={require("../../assets/league-badges/league1.png")}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.opacityFormat}>
                    <TouchableOpacity
                    testID="leagueTwoOpacity"
                            style={styles.button}
                            onPress={() => {
                                navigation.navigate("LeagueTwoFixtures");
                            }}
                        >
                            <Text style={styles.buttonText}>Cinch League Two</Text>
                            <Image style={styles.leagueBadge}
                                resizeMode="contain"
                                source={require("../../assets/league-badges/league-two-logo.png")}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({

    scroller: {
        flex: 1,
        flexDirection: 'column',
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },

    header: {
        paddingBottom: 15,
        fontSize: 20,
        paddingTop: 15,
    },

    opacityFormat: {
        flexDirection: 'row',
        padding: 40,
        justifyContent: 'space-evenly',
    },

    button: {
        width: 250,
        height: 60,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
    },

    buttonText: {
        fontSize: 20,
        textTransform:'uppercase',
        textAlign: 'center',
    },

    leagueBadge:{
        height: 38,
        width: 35,
    }
  });