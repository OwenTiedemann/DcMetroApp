import { StyleSheet, View} from "react-native";
import {Button, Menu} from "react-native-paper";
import {useState} from "react";


const MapLineSelector = ({setSelectedLine}) => {
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    return (
        <View style={styles.overlay}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu} labelStyle={{color: 'black'}}>Select Line</Button>}>
                <Menu.Item
                    key={'red'}
                    onPress={() => {
                        setSelectedLine('red')
                        closeMenu()
                    }}
                    title="Red"/>
                <Menu.Item
                    key={'orange'}
                    onPress={() => {
                        setSelectedLine('orange')
                        closeMenu()
                    }}
                    title="Orange"/>
                <Menu.Item
                    key={'blue'}
                    onPress={() => {
                        setSelectedLine('blue')
                        closeMenu()
                    }}
                    title="Blue"/>
                <Menu.Item
                    key={'yellow'}
                    onPress={() => {
                        setSelectedLine('yellow')
                        closeMenu()
                    }}
                    title="Yellow"/>
                <Menu.Item
                    key={'green'}
                    onPress={() => {
                        setSelectedLine('green')
                        closeMenu()
                    }}
                    title="Green"/>
                <Menu.Item
                    key={'silver'}
                    onPress={() => {
                        setSelectedLine('silver')
                        closeMenu()
                    }}
                    title="Silver"/>
            </Menu>
        </View>
    )

}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 25,
        right: 25,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
});

export default MapLineSelector
