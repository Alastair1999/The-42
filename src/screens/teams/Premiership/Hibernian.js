import React from "react";
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
    Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
    Layout,
    Text,
    TopNav,
    Button,
    Section,
    SectionContent,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
    return (
        <Layout>
            <TopNav
                middleContent="Team Information"
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
                    <View style={styles.header}>
                        <Text style={styles.clubTitle}>Hibernian</Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/hibernian.png")}/>
                    </View>

                    <View style={styles.clubLocation}>
                        <Text style={styles.location}> City / Area </Text>
                        <Text style={styles.locationText}> Edinburgh / Leith </Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> League -</Text>
                        <Text style={styles.generalInfoText}> Cinch Premiership</Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Main Rival - </Text>
                        {/* Heart of Midlothian is just an example of a rival */}
                        <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("HeartOfMidlothian");
                                }}
                              >
                                <Text>
                                  Heart of Midlothian {"\n"}
                                </Text>
                              </TouchableOpacity>
                        
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Stadium Name - </Text>
                        <Text style={styles.generalInfoText}> Easter Road</Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Capacity -</Text>
                        <Text style={styles.generalInfoText}> 20,421</Text>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.uk/maps/place/Easter+Road+(Hibernian+FC)/@55.9617787,-3.1674797,17z/data=!3m1!4b1!4m5!3m4!1s0x4887b872b402abff:0xb53c8d9bc14f7bda!8m2!3d55.9617787!4d-3.165291")}>
                        <Image style={styles.stadiumPhoto}
                        resizeMode="contain"
                        source={require("../../../../assets/google-map-photos/hearts_gm.jpg")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonBackGround}>
                        <Button 
                            style={styles.buttonStyle}
                            text="Tickets"
                            color="green"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/tickets-and-hospitality/matchday/upcoming-games")}
                        />
                        <Button 
                            style={styles.buttonStyle}
                            text="Fixtures"
                            color="green"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/fixtures/first-team/fixtures-and-results")}
                        />
                        <Button 
                            style={styles.buttonStyle}
                            text="Players"
                            color="green"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/squads/first-team/playing-squad")}
                        />
                    </View>
   
                </View>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        //justifyContent: 'space-around',
        //alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    clubTitle: {
        fontSize: 20,
        color: 'green',
        //backgroundColor: 'blue'
    },

    clubBadgeFormat: {
        width: 35,
        height: 38,
    },

    clubLocation: {
        flexDirection: 'row',
        height: 60,
        //paddingTop: 20,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        //flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    locationText: {
        fontSize: 15,
        textAlignVertical: 'center',
    },

    generalInformation: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
    },

    generalInfoText: {
        fontSize: 15,
    },

    stadiumInfo: {
        backgroundColor: '#ECECEC',
        flexDirection: 'column',
    },

    stadiumPhoto: {
        alignSelf: 'center',
        height: 300,
        //width: 300,
        width: Dimensions.get('window').width,
    },

    buttonBackGround: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        alignItems: 'center',
        //flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },

    buttonStyle: {
        //flexDirection: 'row'
        

    }
 })