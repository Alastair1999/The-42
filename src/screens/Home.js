import React from "react";
import { View, Linking, ScrollView } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <TopNav
        middleContent="The 42"
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
      <ScrollView>
      <View
        style={{
          //flex: 0.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      
        <Section style={{ marginTop: 10, width: 390 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{}}>
              The number of stadiums visited is
            </Text>
          </SectionContent>
        </Section>



        <Section style={{ marginTop: 20 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Menu
            </Text>
            <Button
              style={{ marginTop: 10 }}
              text="View Scottish League Tables"
              status="info"
              onPress={() => Linking.openURL("https://rapi-ui.kikiding.space/")}
            />
            <Button
              text="View Team Checklist"
              onPress={() => {
                navigation.navigate("Checklist");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Logout"
              onPress={() => {
                signOut(auth);
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
      </ScrollView>
    </Layout>
  );
}