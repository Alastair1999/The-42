import React, { useState } from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Image,
} from "react-native";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";
import {
    Layout,
    Text,
    TextInput,
    Button,
    useTheme,
    themeColor,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function forget() {
      setLoading(true);
      await sendPasswordResetEmail(auth, email)
        .then(function () {
          setLoading(false);
          navigation.navigate("Login");
          alert("Your password reset has been sent to your email");
        })
        .catch(function (error) {
          setLoading(false);
          alert(error);
        });
    }
    return (
      <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
        <Layout>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: isDarkmode ? "#17171E" : themeColor.white100,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  height: 300,
                  width: 300,
                }}
                source={require("../../../assets/app-logo/zoomed-colour-logo.png")}
              />
            </View>
            <View
              style={{
                flex: 3,
                paddingHorizontal: 20,
                paddingBottom: 20,
                backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
              }}
            >
              <Text
                size="h3"
                fontWeight="bold"
                style={{
                  alignSelf: "center",
                  padding: 30,
                }}
              >
                Forgot Your Password?
              </Text>
              <Text>Email Address:</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Please enter your email"
                value={email}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
              <Button
                text={loading ? "Loading" : "Reset Password"}
                color='#800000'
                onPress={() => {
                  forget();
                }}
                style={{
                  marginTop: 20,
                }}
                disabled={loading}
              />
  
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 15,
                  justifyContent: "center",
                }}
              >
                <Text size="md">Remembered your password?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Login");
                  }}
                >
                  <Text
                    size="md"
                    fontWeight="bold"
                    style={{
                      marginLeft: 5,
                      color: '#800000',
                    }}
                  >
                    Login Here
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 30,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    isDarkmode ? setTheme("light") : setTheme("dark");
                  }}
                >
                  <Text
                    size="md"
                    fontWeight="bold"
                    style={{
                      marginLeft: 5,
                    }}
                  >
                    {isDarkmode ? "☀️ Light Theme" : "🌑 Dark Theme"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </Layout>
      </KeyboardAvoidingView>
    );
}