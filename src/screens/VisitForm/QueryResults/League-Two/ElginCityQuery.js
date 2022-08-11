import React, { useState, useEffect } from "react";
import {View, Text, FlatList, StyleSheet, Pressable, ScrollView} from "react-native";
import {TopNav, Layout} from "react-native-rapi-ui";
import {Ionicons} from "@expo/vector-icons";
import {firebase} from "../../../../components/QueryConfig";
import { async } from "@firebase/util";


const ElginCityQuery = ({navigation}) => {

    const [users, setUsers] = useState([]);
    const elginCityRef = firebase.firestore().collection("elgin-city");

    useEffect(async () => {
        elginCityRef
        .onSnapshot(
            querySnapshot => {
                const users = []
                querySnapshot.forEach((doc)=> {
                    const {visit, fixture, competition, date, result, scorers} = doc.data()
                    users.push({
                        id: doc.id,
                        visit,
                        fixture,
                        competition, 
                        date,
                        result,
                        scorers,
                    })
                })
                setUsers(users)
            }
        )
    }, []) 

    return (
        <Layout>
            <TopNav
                middleContent="Elgin City Previous Visits"
                leftContent={
                    <Ionicons
                        name="chevron-back"
                        size={20}
                    />
                }
                leftAction={() => navigation.goBack()}
            />
                <View style={{flex:1, marginTop: 10,}}>
                    <FlatList 
                        style ={{height:'100%', }}
                        data={users}
                        numColumns={1}
                        renderItem={({item})=> (
                            <Pressable
                                style={styles.container}
                            >
                                <View style={styles.innerContainer}>
                                    <Text style={styles.itemHeading}>{item.visit}</Text>
                                    <Text style={styles.itemText}>{item.fixture}</Text>
                                    <Text style={styles.itemText}>{item.competition}</Text>
                                    <Text style={styles.itemText}>{item.date}</Text>
                                    <Text style={styles.itemText}>{item.result}</Text>
                                    <Text style={styles.itemText}>{item.scorers}</Text>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
        </Layout>
    )
}

export default ElginCityQuery;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
    },

    innerContainer: {
        alignItems: 'center',
        flexDirection:'column',

    },

    itemHeading: {
        fontWeight: 'bold',
    },

    itemText: {
        fontWeight:'300',
    }
})