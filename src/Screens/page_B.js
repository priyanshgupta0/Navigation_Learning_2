import { useEffect, useState } from "react";
import * as React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, TextInput, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from '../Styles/styles';
import { useNavigation } from "@react-navigation/native";

const Names = [];

const PageB = ({ route }) => {

    const navigation = useNavigation();
    const [Name, setName] = useState();
    const [Id, setID] = useState();

    const Submit = () => {
        let a = Id;
        let name = Name;
        Names.push({
            Name: name,
        });
        console.log(Names)
        navigation.navigate('Page A', { NameArray: Names });
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <TextInput style={styles.Box}
                color={'black'}
                placeholderTextColor={'black'}
                value={Name}
                onChangeText={(Name) => setName(Name)}
                placeholder={'Enter Your Name'}>
            </TextInput>
            <TouchableOpacity style={styles.button} onPress={() => {
                Submit();
            }}>
                <Text style={styles.buttonText}>A</Text>
            </TouchableOpacity>
        </View>
    );
}

export default PageB;