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

export default function Dundee ({ navigation }) {
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
                        <Text style={styles.clubTitle}>Dundee F.C </Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/dundee.png")}/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-evenly',borderWidth:1, padding:10,backgroundColor:"#1a315a"}}>
                        <View style={styles.leftView}>
                            <Text style={styles.informationText}>City / Region -{"\n"}</Text>
                            <Text style={styles.informationText}>Year Founded -{"\n"}</Text>
                            <Text style={styles.informationText}>Main Rival -{"\n"}</Text>
                            <Text style={styles.informationText}>Stadium Name -{"\n"}</Text>
                            <Text style={styles.informationText}>Capacity -</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={{color:'white'}}>Dundee{"\n"}</Text>
                            <Text style={{color:'white'}}>1893{"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("DundeeUnited");
                                }}
                              >
                                <Text style={{color:'white'}}>
                                  Dundee United{"\n"}
                                </Text>
                              </TouchableOpacity>
                            <Text style={{color:'white'}}>Kilmac Stadium{"\n"}</Text>
                            <Text style={{color:'white'}}>11,850</Text>
                        </View>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View style={{backgroundColor:"#1a315a"}}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.uk/maps/place/Dundee+Football+Club/@56.4754046,-2.975397,17z/data=!3m1!4b1!4m5!3m4!1s0x48865ce75fac5ec3:0xfbd91ea3d939fd52!8m2!3d56.4754046!4d-2.9732083")}>
                        <Image style={styles.stadiumPhoto}
                        resizeMode="contain"
                        source={require("../../../../assets/google-map-photos/dundee_gm.png")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonBackGround}>
                        <Button 
                            text="Tickets"
                            color="#1a315a"
                            width={100}
                            onPress={() => Linking.openURL("https://mpv.tickets.com/schedule/?agency=DDMS_MPV&orgid=54151#/?view=list&includePackages=true")}
                        />
                        <Button 
                            text="Fixtures"
                            color="#1a315a"
                            width={100}
                            onPress={() => Linking.openURL("https://dundeefc.co.uk/matches/")}
                        />
                        <Button 
                            text="Players"
                            color="#1a315a"
                            width={100}
                            onPress={() => Linking.openURL("https://dundeefc.co.uk/team/first-team")}
                        />
                    </View>

                    <View style={{padding:16, borderBottomWidth:1,}}>
                        <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("DundeeQuery");
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
        color: '#1a315a',
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