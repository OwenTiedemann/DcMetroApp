import {StyleSheet, View} from "react-native";
import Map from "../components/Map";
import MapLineSelector from "../components/MapLineSelector";
import BottomSheetComponent from "../components/BottomSheetComponent";
import {useState} from "react";
import {Provider} from "react-native-paper";


const HomeScreen = ({}) => {

    const [selected, setSelected] = useState('')


    return (
        <Provider>
            <View style={styles.container}>
                <Map selected={selected} setSelected={setSelected}/>
                <MapLineSelector setSelectedLine={setSelected}/>
                <BottomSheetComponent/>
            </View>
        </Provider>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen
