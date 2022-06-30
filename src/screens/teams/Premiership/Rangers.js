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

export default function Rangers ({ navigation }) {
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
                        <Text style={styles.clubTitle}>Rangers </Text>
                        <Image style={styles.clubBadgeFormat}
                        resizeMode="contain"
                        source={require("../../../../assets/club-badges/rangers.png")}/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-evenly',borderWidth:1, padding:10,backgroundColor:"#1b458f"}}>
                        <View style={styles.leftView}>
                            <Text style={styles.informationText}>City / Region -{"\n"}</Text>
                            <Text style={styles.informationText}>Year Founded -{"\n"}</Text>
                            <Text style={styles.informationText}>Main Rival -{"\n"}</Text>
                            <Text style={styles.informationText}>Stadium Name -{"\n"}</Text>
                            <Text style={styles.informationText}>Capacity -</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={{color:'white'}}>Glasgow / Govan{"\n"}</Text>
                            <Text style={{color:'white'}}>1886{"\n"}</Text>
                            <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate("Celtic");
                                }}
                              >
                                <Text style={{color:'white'}}>
                                  Celtic {"\n"}
                                </Text>
                              </TouchableOpacity>
                            <Text style={{color:'white'}}>Ibrox{"\n"}</Text>
                            <Text style={{color:'white'}}>50,817</Text>
                        </View>
                    </View>

                    <View style={styles.stadiumInfo}>
                        <Text style={styles.clubTitle}> Stadium Location: </Text>
                    </View>

                    <View style={{backgroundColor:"#1b458f"}}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.uk/maps/place/Ibrox+Stadium/@55.853172,-4.3114573,17z/data=!3m1!4b1!4m5!3m4!1s0x4888467327810ea1:0xff43846aa29e2690!8m2!3d55.853172!4d-4.3092686")}>
                        <Image style={styles.stadiumPhoto}
                        resizeMode="contain"
                        source={require("../../../../assets/google-map-photos/hearts_gm.jpg")}/>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.buttonBackGround}>
                        <Button 
                            text="Tickets"
                            color="#1b458f"
                            width={100}
                            onPress={() => Linking.openURL("https://www.tickets.motherwellfc.co.uk")}
                        />
                        <Button 
                            text="Fixtures"
                            color="#1b458f"
                            width={100}
                            onPress={() => Linking.openURL("https://www.motherwellfc.co.uk/fixtures-and-results/first-team/")}
                        />
                        <Button 
                            text="Players"
                            color="#1b458f"
                            width={100}
                            onPress={() => Linking.openURL("https://www.motherwellfc.co.uk/squad/first-team/")}
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
        color: '#1b458f',
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