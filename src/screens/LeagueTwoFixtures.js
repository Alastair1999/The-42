import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SectionList,
    SafeAreaView,
    FlatList,
    StatusBar
} from "react-native";
import { TopNav, Layout } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
    {
        title: "Round 1",
        data: ["Stranraer vs Annan", "Stenhousemuir vs Albion Rovers", "Elgin vs East Fife", "Dumbarton vs Stirling", "Bonnyrigg Rose vs Forfar"]
    },
    {
        title: "Round 2",
        data: ["Albion Rovers vs Dumbarton", "Annan Athletic vs Stenhousemuir", "East Fife vs Bonnyrigg Rose", "Forfar vs Stranraer", "Stirling vs Elgin"]
    },
    {
        title: "Round 3",
        data: ["Albion Rovers vs East Fife", "Dumbarton vs Annan", "Forfar vs Elgin", "Stirling vs Stenhousemuir", "Stranraer vs Bonnyrigg Rose"]
    }
];

const Item = ({title, data}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function LeagueTwoFixtures ({navigation}) {
    return (
        <Layout>
            <TopNav
                middleContent="Cinch Premiership Fixtures"
                leftContent={
                    <Ionicons
                      name="chevron-back"
                      size={20}
                    />
                  }
                  leftAction={() => navigation.goBack()}
            />
                <View style={styles.container}>
                    <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => <Item title={item} 
                    />}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    />
                </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignContent: 'center',
        marginHorizontal: 16,
    },

    item: {
        backgroundColor: 'pink',
        marginVertical: 2,
        padding: 5,
    },

    header: {
        fontSize: 26,
        backgroundColor: 'white',
        //padding: 15,
        marginVertical: 10,
    },

    title: {
        fontSize: 20,
    },
})