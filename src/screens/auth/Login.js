import React, {useState} from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Image,
}from "react-native";
import {getAuth, signInWithEmailAndPassword}from "firebase/auth";
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
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function login() {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password).catch(function (
        error
      ) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        setLoading(false);
        alert(errorMessage);
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
                  height: 220,
                  width: 220,
                }}
                source={require("../../../assets/app_logo/colour_logo.png")}
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
                fontWeight="bold"
                style={{
                  alignSelf: "center",
                  padding: 30,
                  color: '#800000',
                }}
                size="h3"
              >
                Welcome Back
              </Text>
  
              <Text
                fontWeight="bold"
                style={{
                  alignSelf: "center",
                }}
                size="h5"
              >
                Sign In To Continue
              </Text>
  
              <Text>Email</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Enter your email"
                value={email}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
  
              <Text style={{ marginTop: 15 }}>Password</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Enter your password"
                value={password}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <Button
                text={loading ? "Loading" : "Sign In"}
                color="#800000"
                onPress={() => {
                  login();
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
                <Text size="md">Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Register");
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
                    Register Here
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ForgetPassword");
                  }}
                >
                  <Text size="md" fontWeight="bold">
                    Forgotten Password?
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