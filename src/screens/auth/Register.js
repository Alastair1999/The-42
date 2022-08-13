import React, {useState} from "react";
import {
    ScrollView,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Image,
} from "react-native";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {
    Layout,
    Text,
    TextInput,
    Button,
    useTheme,
    themeColor,
} from "react-native-rapi-ui"

export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function register() {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password).catch(function (
        error
      ) {
        var errorCode = error.code;
        var errorMessage = error.message;
        setLoading(false);
        alert(errorMessage);
      });
    }

  {/* Allows the user to register or return to the sign in page*/}
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
                fontWeight="bold"
                size="h3"
                style={{
                  alignSelf: "center",
                  padding: 30,
                  color: '#800000',
                }}
              >
                Sign Up Now!
              </Text>
              <Text>Email Address:</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Enter an email address"
                value={email}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
  
              <Text style={{ marginTop: 15 }}>Password:</Text>
              <TextInput
                containerStyle={{ marginTop: 15 }}
                placeholder="Enter a password"
                value={password}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
              />
              <Button
                text={loading ? "Loading" : "Create An Account"}
                color='#800000'
                onPress={() => {
                  register();
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
                <Text size="md">Already have an account?</Text>
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