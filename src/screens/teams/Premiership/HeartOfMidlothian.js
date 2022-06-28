import React from "react";
import {
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
    Dimensions,
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
                        <Text style={styles.clubTitle}>Heart of Midlothian</Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/hearts.png")}/>
                    </View>

                    <View style={styles.clubLocation}>
                        <Text style={styles.location}> City / Area </Text>
                        <Text style={styles.locationText}> Edinburgh/ Gorgie </Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> League -</Text>
                        <Text style={styles.generalInfoText}> Cinch Premiership</Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Main Rival - </Text>
                        <Text style={styles.generalInfoText}> Hibernian </Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Stadium Name - </Text>
                        <Text style={styles.generalInfoText}> Tynecastle Park</Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Capacity -</Text>
                        <Text style={styles.generalInfoText}> 20,099</Text>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/maps/@55.9385312,-3.2329051,16.27z")}>
                        <Image style={styles.stadiumPhoto}
                        resizeMode="contain"
                        source={require("../../../../assets/google-map-photos/hearts_gm.jpg")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonBackGround}>
                        <Button 
                            text="Tickets"
                            color="#800000"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/tickets-and-hospitality/matchday/upcoming-games")}
                        />
                        <Button 
                            text="Fixtures"
                            color="#800000"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/fixtures/first-team/fixtures-and-results")}
                        />
                        <Button 
                            text="Players"
                            color="#800000"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/squads/first-team/playing-squad")}
                        />
                    </View>

                    <View style={styles.submissionsLink}>
                        <Text style={styles.clubTitle}>Click to see previous visit submissions!</Text>
                    </View>
   
                </View>
            </ScrollView>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
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
        color: '#800000',
    },

    clubBadgeFormat: {
        width: 35,
        height: 38,
    },

    clubLocation: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
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
        height: 65,
        backgroundColor: '#fff',
        alignItems: 'center',
        //flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        paddingTop: 20,
    },

    submissionsLink: {
        paddingTop:20,
        

    }
 })

