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
          onPress={() => {
            navigation.navigate("Kilmarnock");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Kilmarnock FC</Text>

        <Text
          onPress={() => {
            navigation.navigate("Livingston");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Livingston</Text>

        <Text
          onPress={() => {
            navigation.navigate("Motherwell");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Motherwell</Text>

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
          onPress={() => {
            navigation.navigate("RossCounty");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Ross County</Text>

        <Text
          onPress={() => {
            navigation.navigate("StJohnstone");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >St Johnstone</Text>

        <Text
          onPress={() => {
            navigation.navigate("StMirren");
          }}
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
        <View
        style={{
          marginLeft: 5,
        }}
      >
        <Text
          onPress={() => {
            navigation.navigate("Arbroath");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Arbroath</Text>
        <Text
          onPress={() => {
            navigation.navigate("AyrUnited");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Ayr United</Text>
        <Text
          onPress={() => {
            navigation.navigate("CoveRangers");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Cove Rangers</Text>
        <Text
          onPress={() => {
            navigation.navigate("Dundee");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Dundee</Text>
        <Text
          onPress={() => {
            navigation.navigate("GreenockMorton");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Greenock Morton</Text>
        <Text
          onPress={() => {
            navigation.navigate("HamiltonAccies");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Hamilton Academical</Text>
        <Text
          onPress={() => {
            navigation.navigate("Inverness");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Inverness Caledonian Thistle</Text>
        <Text
          onPress={() => {
            navigation.navigate("PartickThistle");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Partick Thistle</Text>
        <Text
          onPress={() => {
            navigation.navigate("QueensPark");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Queens Park</Text>
        <Text
          onPress={() => {
            navigation.navigate("RaithRovers");
          }}
          fontWeight="regular"
          style={{
            color: 'black',
          }}
        >Raith Rovers</Text>

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