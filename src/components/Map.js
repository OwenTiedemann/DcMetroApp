import MapView, {Geojson} from "react-native-maps";
import {Dimensions, StyleSheet} from "react-native";
import MetroLineData from '../data/Metro_Lines_Regional.json'
import MetroStationData from '../data/Metro_Stations_Regional.json'
import {useState} from "react";
import {Colors} from "../utils/colors";
import MapStyle from '../data/MapStyle.json'



const Map = ({selected, setSelected}) => {

    const [mapRef, setMapRef] = useState(null)


    const [boundingBox, setBoundingBox] = useState({
        northEast: {
            latitude: 39.26025421133267,
            longitude: -76.79485268890858,
        },
        southWest: {
            latitude: 38.73966026202137,
            longitude: -77.32396367937326,
        }
    })

    const OnMapReady = () => {
        mapRef.setMapBoundaries(boundingBox.northEast, boundingBox.southWest)
    }

    const LineComponents = () => {
        let components = []

        MetroLineData.features.map(feature => {
            const insertedObject = {
                features: [feature]
            };

            if (feature.properties.NAME === 'blue') {
                components.push(
                    <Geojson
                        tappable={true}
                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={Colors.blueLine}
                        strokeWidth={selected === '' ? 5 : selected === 'blue' ? 10 : 2}
                        onPress={(data) => {
                            setSelected(data.feature.properties.NAME)
                        }}
                    />
                )
            } else if (feature.properties.NAME === 'red') {
                components.push(
                    <Geojson
                        tappable={true}

                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={Colors.redLine}
                        strokeWidth={selected === '' ? 5 : selected === 'red' ? 10 : 2}
                        zIndex={selected === '' ? 0 : selected === 'red' ? 1 : 0}
                        onPress={(data) => {setSelected(data.feature.properties.NAME)}}
                    />
                )
            } else if (feature.properties.NAME === 'orange') {
                components.push(
                    <Geojson
                        tappable={true}

                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={Colors.orangeLine}
                        strokeWidth={selected === '' ? 5 : selected === 'orange' ? 10 : 2}
                        zIndex={selected === '' ? 0 : selected === 'orange' ? 1 : 0}
                        onPress={(data) => setSelected(data.feature.properties.NAME)}
                    />
                )
            } else if (feature.properties.NAME === 'green') {
                components.push(
                    <Geojson
                        tappable={true}
                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={Colors.greenLine}
                        strokeWidth={selected === '' ? 5 : selected === 'green' ? 10 : 2}
                        zIndex={selected === '' ? 0 : selected === 'green' ? 1 : 0}

                        onPress={(data) => setSelected(data.feature.properties.NAME)}
                    />
                )
            } else if (feature.properties.NAME === 'silver') {
                components.push(
                    <Geojson
                        tappable={true}
                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={Colors.silverLine}
                        strokeWidth={selected === '' ? 5 : selected === 'silver' ? 10 : 2}
                        zIndex={selected === '' ? 0 : selected === 'silver' ? 1 : 0}
                        onPress={(data) => setSelected(data.feature.properties.NAME)}
                    />
                )
            } else if (feature.properties.NAME === 'yellow') {
                components.push(
                    <Geojson
                        tappable={true}
                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={Colors.yellowLine}
                        strokeWidth={selected === '' ? 5 : selected === 'yellow' ? 10 : 2}
                        zIndex={selected === '' ? 0 : selected === 'yellow' ? 1 : 0}
                        onPress={(data) => setSelected(data.feature.properties.NAME)}
                    />
                )
            }
        })

        return components
    }

    const StationComponents = () => {
        let components = []

        if (selected !== '') {
            MetroStationData.features.map(feature => {
                if (feature.properties.LINE.includes(selected)) {
                    const insertedObject = {
                        features: [feature]
                    };

                    components.push(
                        <Geojson
                            tappable={true}
                            key={feature.properties.NAME}
                            geojson={insertedObject}
                            strokeColor={Colors.blueLine}
                            strokeWidth={selected === '' ? 5 : selected === 'blue' ? 10 : 2}
                            onPress={(data) => {}}
                        />
                    )
                }
            })
        }


        return components
    }

    return (
            <MapView
                userInterfaceStyle={'dark'}
                ref={(ref) => setMapRef(ref)}
                style={styles.map}
                onMapReady={OnMapReady}
                initialRegion={{
                    latitude: parseFloat(38.8977),
                    longitude: parseFloat(-77.0365),
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }}
                minZoomLevel={9}
                onPress={(e) => {
                    setSelected('')
                }}
                customMapStyle={MapStyle}
            >
                {LineComponents()}
                {StationComponents()}
            </MapView>


    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    overlay: {
        position: 'absolute',
        top: 25,
        right: 25,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
});

export default Map
