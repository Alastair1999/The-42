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
                        <Text style={styles.clubTitle}>Celtic </Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/celtic.png")}/>
                    </View>

                    <View style={styles.clubLocation}>
                        <Text style={styles.location}> City / Area </Text>
                        <Text style={styles.locationText}> Glasgow / Parkhead </Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}>Year Founded -</Text>
                        <Text style={styles.generalInfoText}> 1887</Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> League -</Text>
                        <Text style={styles.generalInfoText}> Cinch Premiership</Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Main Rival - </Text>
                        <Text style={styles.generalInfoText}> Rangers </Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Stadium Name - </Text>
                        <Text style={styles.generalInfoText}> Celtic Park</Text>
                    </View>

                    <View style={styles.generalInformation}>
                        <Text style={styles.generalInfoText}> Capacity -</Text>
                        <Text style={styles.generalInfoText}> 60,832</Text>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/maps/place/Celtic+Park/@55.849696,-4.2077314,17z/data=!3m1!4b1!4m5!3m4!1s0x4888414f6436db0f:0xf1778c849701d24!8m2!3d55.849696!4d-4.2055427")}>
                        <Image style={styles.stadiumPhoto}
                        resizeMode="contain"
                        source={require("../../../../assets/google-map-photos/celtic_gm.png")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonBackGround}>
                        <Button 
                            style={styles.buttonStyle}
                            text="Tickets"
                            color="green"
                            width={100}
                            onPress={() => Linking.openURL("https://www.celticfc.com/tickets")}
                        />
                        <Button 
                            style={styles.buttonStyle}
                            text="Fixtures"
                            color="green"
                            width={100}
                            onPress={() => Linking.openURL("https://www.celticfc.com/fixtures")}
                        />
                        <Button 
                            style={styles.buttonStyle}
                            text="Players"
                            color="green"
                            width={100}
                            onPress={() => Linking.openURL("https://www.celticfc.com/teams")}
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