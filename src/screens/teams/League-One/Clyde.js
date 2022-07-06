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

export default function Clyde ({ navigation }) {
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
                        <Text style={styles.clubTitle}>Clyde F.C. </Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/clyde.png")}/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-evenly',borderWidth:1, padding:10,backgroundColor:"red"}}>
                        <View style={styles.leftView}>
                            <Text style={styles.informationText}>City / Region -{"\n"}</Text>
                            <Text style={styles.informationText}>Year Founded -{"\n"}</Text>
                            <Text style={styles.informationText}>Main Rival -{"\n"} {"\n"}</Text>
                            <Text style={styles.informationText}>Stadium Name -{"\n"}</Text>
                            <Text style={styles.informationText}>Capacity -</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={{color:'white'}}>Cumbernauld{"\n"}</Text>
                            <Text style={{color:'white'}}>1877{"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("PartickThistle");
                                }}
                              >
                                <Text style={{color:'white'}}>
                                  Partick Thistle 
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Airdrie");
                                }}
                              >
                                <Text style={{color:'white'}}>
                                  Aidrieonians {"\n"}
                                </Text>
                              </TouchableOpacity>
                            <Text style={{color:'white'}}>New Douglas Park{"\n"}</Text>
                            <Text style={{color:'white'}}>6,018</Text>
                        </View>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View style={{backgroundColor:"red"}}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.uk/maps/place/Arbroath+Football+Club/@56.5526649,-2.5938946,17z/data=!3m1!4b1!4m5!3m4!1s0x48868d2143063781:0x14e24490e16dd90d!8m2!3d56.5527183!4d-2.5917266")}>
                        <Image style={styles.stadiumPhoto}
                        resizeMode="contain"
                        source={require("../../../../assets/google-map-photos/clyde_gm.png")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonBackGround}>
                        <Button 
                            text="Tickets"
                            color="red"
                            width={100}
                            onPress={() => Linking.openURL("https://clydefc.ticketco.events/uk/en?tracking_link_uuid=website")}
                        />
                        <Button 
                            text="Fixtures"
                            color="red"
                            width={100}
                            onPress={() => Linking.openURL("https://www.clydefc.co.uk/match/fixtures/")}
                        />
                        <Button 
                            text="Players"
                            color="red"
                            width={100}
                            onPress={() => Linking.openURL("https://www.clydefc.co.uk/team/statistics/")}
                        />
                    </View>

                    <View style={{padding:16, borderBottomWidth:1,}}>
                        <Text style={{textDecorationLine:'underline', fontSize:20}}>Click to see previous visit submissions!</Text>
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
        color: 'red',
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