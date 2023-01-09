import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from '../Styles/styles';

const HomeScreen = ({ route }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.main}>
            <Text style={styles.TextStyle}>Welcome</Text>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Page B') }} >
                <Text style={styles.buttonText}> Page B</Text>
            </TouchableOpacity>
            <FlatList
                data={route.params?.NameArray}
                renderItem={({ item }) =>
                    <View style={styles.render}>
                        <Text style={styles.renderText}>{item.Name}</Text>
                    </View>
                }
                keyExtractor={item => item.Name}
            />
        </View >
    );
}

export default HomeScreen;