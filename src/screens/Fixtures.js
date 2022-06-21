import React from "react";
import {View,
ScrollView,
Image,
Text,
StyleSheet,
}from "react-native";
import { TopNav, Layout } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";


export default function ({ navigation }) {
    return (
        <Layout>
            <TopNav
                middleContent="League Tables"
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
                    <Text style={styles.leagueName}>Cinch Premiership</Text>
                    <Image style={styles.leagueBadges}
                        resizeMode="contain"
                        source={require("../../assets/league-badges/premiership-logo.png")}/>
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
        backgroundColor: 'white',
        //justifyContent: 'space-around',
        //alignItems: 'center',
    },

    header: {
        textAlign: 'left',
        flexDirection: 'row',
    },

    leagueName: {
        fontSize: 20,
    },

    leagueBadges: {
        width: 100,
        height: 40,
    }


})