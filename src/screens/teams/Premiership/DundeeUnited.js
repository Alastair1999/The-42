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
                        <Text style={styles.clubTitle}>Dundee United</Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/dundee-united.png")}/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'center',borderWidth:1, padding:20,}}>
                        <View style={styles.leftView}>
                            <Text>Year Founded-</Text>
                            <Text>Main Rival-</Text>
                            <Text>Stadium Name-</Text>
                            <Text>Capacity-</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text>1909</Text>
                            <Text>Dundee</Text>
                            <Text>Tannadice</Text>
                            <Text>14,223</Text>
                        </View>
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
                            color="orange"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/tickets-and-hospitality/matchday/upcoming-games")}
                        />
                        <Button 
                            text="Fixtures"
                            color="orange"
                            width={100}
                            onPress={() => Linking.openURL("https://www.heartsfc.co.uk/fixtures/first-team/fixtures-and-results")}
                        />
                        <Button 
                            text="Players"
                            color="orange"
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
        paddingTop: 10,
        backgroundColor: '#fff',
        borderWidth:1,
        //justifyContent: 'space-around',
        //alignItems: 'center',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    clubTitle: {
        fontSize: 20,
        color: 'orange',
    },

    clubBadgeFormat: {
        width: 35,
        height: 38,
        //alignContent: 'center',
    },

    leftView: {
        //backgroundColor: 'blue',
        //width: 200,
        //justifyContent: 'center',
        alignItems: "left",
        //alignSelf: 'left',

    },

    rightView:{
        //backgroundColor: 'red',
        //width: 200,
        //textAlign:"center",
        alignItems: 'right',
        
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

    stadiumInfo: {
        backgroundColor: '#ECECEC',
        flexDirection: 'column',
        padding:20,
    },

    stadiumPhoto: {
        alignSelf: 'center',
        height: 300,
        //width: 300,
        width: Dimensions.get('window').width,
        borderWidth: 1,
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
        

    },

    informationText: {
        backgroundColor:'red',
        //textAlign:"left",
    }
 });
