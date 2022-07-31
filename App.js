import {NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import HomeScreen from "./src/features/HomeScreen";


const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>

    );
}


