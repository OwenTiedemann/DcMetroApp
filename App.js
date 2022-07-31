import {StatusBar} from 'expo-status-bar';
import BottomSheetComponent from "./src/components/BottomSheetComponent";
import MapView from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Map from "./src/components/Map";

function MapScreen() {
    return (
        <View style={styles.container}>
            <Map/>
        </View>
    )
}

const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={MapScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
