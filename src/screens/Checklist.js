import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Team Checklist"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View style={styles.container}>
        <ScrollView>
          
          

        <View style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <Text
          fontWeight="bold"
          style={{
            color: 'black',
          }}
        >Cinch Premiership</Text>
        </View>

      <View
        style={{
          marginLeft: 5,
        }}
      >
        <Text
          onPress={() => {
            navigation.navigate("Aberdeen");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Aberdeen</Text>

        <Text
          onPress={() => {
            navigation.navigate("Celtic");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Celtic</Text>

        <Text
          onPress={() => {
            navigation.navigate("DundeeUnited");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Dundee United</Text>

        <Text
          onPress={() => {
            navigation.navigate("HeartOfMidlothian");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Heart of Midlothian</Text>

        <Text
          onPress={() => {
            navigation.navigate("Hibernian");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Hibernian</Text>

        <Text
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Kilmarnock FC</Text>

        <Text
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Livingston FC</Text>

        <Text
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Motherwell FC</Text>

        <Text
          onPress={() => {
          navigation.navigate("Rangers")
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Rangers</Text>

        <Text
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Ross County</Text>

        <Text
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >St Johnstone</Text>

        <Text
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >St Mirren</Text>
      </View>

      <View style={{
        alignItems: "center",
        justifyContent: "center",
      }}
      >
        <Text
          fontWeight="bold"
          style={{
            color: 'black',
          }}
        >Cinch Championship</Text>
      </View>

      <View style={{
        alignItems: "center",
        justifyContent: "center",
      }}
      >
        <Text
          fontWeight="bold"
          style={{
            color: 'black',
          }}
        >Cinch League One</Text>
      </View>

      <View style={{
        alignItems: "center",
        justifyContent: "center",
      }}
      >
        <Text
          fontWeight="bold"
          style={{
            color: 'black',
          }}
        >Cinch League Two</Text>
      </View>
            </ScrollView>
          </View>




        
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    //backgroundColor: 'red',
    justifyContent: 'space-around',
  },

  leagueTitleStyle: {
    alignItems: 'center',
  },

  teamStyles: {
    color: 'black',
    fontSize: 14,
    alignItems: 'flex-start'
  }
})