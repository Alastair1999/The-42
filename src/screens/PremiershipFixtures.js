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
        title:"Round 1 - 30/07 to 31/07",
        data: ["Livingston vs Rangers ", "St Johnstone vs Hibernian ", "Kilmarnock vs Dundee United", "Hearts vs Ross County", "St Mirren vs Motherwell", "Celtic vs Aberdeen"]
    },
    {
        title:"Round 2 - 06/08 to 07/08",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 3 - 30/07 to 31/07",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 4",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 5",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 6",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 7",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 8",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 9",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 10",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 11",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 12",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 13",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 14",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 15",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 16",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 17",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 18",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 19",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 20",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 21",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 22",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 23",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 24",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 25",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 26",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 27",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 28",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 29",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 30",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 31",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },
    {
        title:"Round 32",
        data: ["Aberdeen vs St Mirren ", "Motherwell vs Ross County ", "Rangers vs Kilmarnock", "Ross County vs Celtic", "Hibs vs Hearts", "Dundee Utd vs Livingston"]
    },

];

const Item = ({title, data}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


export default function PremiershipFixtures ({navigation}) {
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
