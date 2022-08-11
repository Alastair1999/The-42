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

export default function HamiltonAccies ({ navigation }) {
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
                        <Text style={styles.clubTitle}>Hamilton Academical </Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/hamilton.png")}/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-evenly',borderWidth:1, padding:10,backgroundColor:"red"}}>
                        <View style={styles.leftView}>
                            <Text style={styles.informationText}>City / Region -{"\n"}</Text>
                            <Text style={styles.informationText}>Year Founded -{"\n"}</Text>
                            <Text style={styles.informationText}>Main Rival -{"\n"}</Text>
                            <Text style={styles.informationText}>Stadium Name -{"\n"}</Text>
                            <Text style={styles.informationText}>Capacity -</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={{color:'white'}}>South Lanarkshire / Hamilton{"\n"}</Text>
                            <Text style={{color:'white'}}>1874{"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Motherwell");
                                }}
                              >
                                <Text style={{color:'white'}}>
                                  Motherwell{"\n"}
                                </Text>
                              </TouchableOpacity>
                            <Text style={{color:'white'}}>Fountain of Youth Stadium{"\n"}</Text>
                            <Text style={{color:'white'}}>6,018</Text>
                        </View>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View style={{backgroundColor:"red"}}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.uk/maps/place/Hamilton+Academical+Football+Club/@55.7819185,-4.0608622,17z/data=!3m2!4b1!5s0x48886ab729b0136f:0x38048578c641e013!4m5!3m4!1s0x48886acafc87af73:0xc1b3682da0b89ca7!8m2!3d55.7819185!4d-4.0586735")}>
                        <Image style={styles.stadiumPhoto}
                        resizeMode="contain"
                        source={require("../../../../assets/google-map-photos/hamilton_accies_gm.png")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonBackGround}>
                        <Button 
                            text="Tickets"
                            color="red"
                            width={100}
                            onPress={() => Linking.openURL("https://hamiltonacciesfc.co.uk/ticket-info/")}
                        />
                        <Button 
                            text="Fixtures"
                            color="red"
                            width={100}
                            onPress={() => Linking.openURL("https://hamiltonacciesfc.co.uk/fixtures/")}
                        />
                        <Button 
                            text="Players"
                            color="red"
                            width={100}
                            onPress={() => Linking.openURL("https://hamiltonacciesfc.co.uk/first-team-profiles/")}
                        />
                    </View>

                    <View style={{padding:16, borderBottomWidth:1,}}>
                        <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("HamiltonQuery");
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