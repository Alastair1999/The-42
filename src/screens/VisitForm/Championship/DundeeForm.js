import React from "react";
import {StyleSheet, Text, View, Button, ScrollView, TextInput, ImageBackground} from "react-native";
import {useState} from "react/cjs/react.development";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import { db } from "../../../components/Config";
import {Layout, TopNav} from "react-native-rapi-ui";
import {Ionicons} from "@expo/vector-icons";

export default function MotherwellForm({navigation}) {
    const [visit, setVisit] = useState("");
    const [fixture, setFixture] = useState("");
    const [competition, setCompetition] = useState("");
    const [date, setDate] = useState("");
    const [result, setResult] = useState("");
    const [scorers, setScorers] = useState("");
    
    function create() {

        // add data to Dundee collection
        addDoc(collection(db, "dundee"), {
            visit: visit,
            fixture: fixture,
            competition: competition,
            date: date,
            result: result,
            scorers: scorers,
        }).then (() => {
            //Data submitted successfully
            console.log("Data submitted successfully");

        }).catch((error) => {
            //Data submission failed
            console.log("Data submission failed");
            console.log(error);
        });;
        
    }
    
    return (
        <Layout>
            <TopNav
                middleContent="Dundee Visit Submission"
                leftContent={
                    <Ionicons
                        name="chevron-back"
                        size={20}
                    />
                }
                leftAction={() => navigation.goBack()}
            />
        <View style={styles.container}>
            <ScrollView>
            <TextInput
                style={styles.textBoxes}
                placeholder="Visit Name - e.g. 'Visit 1'"
                onChangeText={(visit) => setVisit(visit)}
                value={visit}
            />
            <TextInput
                style={styles.textBoxes}
                placeholder="Fixture - e.g. 'Aberdeen v. Celtic'"
                onChangeText={(fixture) => setFixture(fixture)}
                value={fixture}
            />
            <TextInput
                style={styles.textBoxes}
                placeholder="Competition - e.g. 'Cinch Premiership'"
                onChangeText={(competition) => setCompetition(competition)}
                value={competition}
            />
            <TextInput
                style={styles.textBoxes}
                placeholder="Date - DD/MM/YYYY format"
                onChangeText={(date) => setDate(date)}
                value={date}
            />
            <TextInput
                style={styles.textBoxes}
                placeholder="Result - e.g. 'Aberdeen 1 - 1 Celtic'"
                onChangeText={(result) => setResult(result)}
                value={result}
            />
            <TextInput
                style={styles.textBoxes}
                placeholder="Goal Scorers - e.g. 'Barron | Kyogo'"
                onChangeText={(scorers) => setScorers(scorers)}
                value={scorers}
            />
            <Button
            onPress={create}
            title="Submit Visit"
            color="black"
            >Submit Visit</Button>


            </ScrollView>
        </View>
    </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },

    textBoxes : {
        width: '95%',
        fontSize: 20,
        padding: 12,
        borderColor:'yellow',
        borderWidth: 0.2,
        borderRadius: 10,
        marginBottom: 20,
    },

});