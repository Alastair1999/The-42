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

export default function HeartOfMidlothian ({ navigation }) {
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
                        <Text style={styles.clubTitle}>Heart of Midlothian </Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/hearts.png")}/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-evenly',borderWidth:1, padding:10,backgroundColor:"#800000"}}>
                        <View style={styles.leftView}>
                            <Text style={styles.informationText}>City / Region -{"\n"}</Text>
                            <Text style={styles.informationText}>Year Founded -{"\n"}</Text>
                            <Text style={styles.informationText}>Main Rival -{"\n"}</Text>
                            <Text style={styles.informationText}>Stadium Name -{"\n"}</Text>
                            <Text style={styles.informationText}>Capacity -</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={{color:'white'}}>Edinburgh / Gorgie{"\n"}</Text>
                            <Text style={{color:'white'}}>1874{"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Hibernian");
                                }}
                              >
                                <Text style={{color:'white'}}>
                                  Hibernian{"\n"}
                                </Text>
                              </TouchableOpacity>
                            <Text style={{color:'white'}}>Tynecastle Park{"\n"}</Text>
                            <Text style={{color:'white'}}>20,099</Text>
                        </View>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View style={{backgroundColor:"#800000"}}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.uk/maps/place/Tynecastle+Park/@55.9390849,-3.2337323,17z/data=!3m1!4b1!4m5!3m4!1s0x4887c7aa96299593:0x9d4e5c780ee90305!8m2!3d55.9390849!4d-3.2315436")}>
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
                            onPress={() => Linking.openURL("https://www.eticketing.co.uk/heartofmidlothian/")}
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

                    <View style={{padding:16, borderBottomWidth:1,}}>
                        <TouchableOpacity
                        testID="viewSubmissionOpacity"
                                onPress={() => {
                                  navigation.navigate("HeartsQuery");
                                }}
                              >
                                <Text style={{textDecorationLine: 'underline', fontSize: 20}}>
                                  Click here to see previous visits!{"\n"}
                                </Text>
                        </TouchableOpacity>
                
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
        flex:1,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    clubTitle: {
        fontSize: 20,
        color: '#800000',
    },

    clubBadgeFormat: {
        width: 35,
        height: 38,
    },

    leftView: {
        alignItems: "left",
    },

    rightView:{
        alignItems: 'right',
        
    },

    informationText :{
        textDecorationLine:'underline',
        color:'white',
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
        backgroundColor: 'white',
        flexDirection: 'column',
        padding:10,
    },

    stadiumPhoto: {
        alignSelf: 'center',
        height: 300,
        width: Dimensions.get('window').width,
        borderWidth: 1,
    },

    buttonBackGround: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 16,
    },
 });

