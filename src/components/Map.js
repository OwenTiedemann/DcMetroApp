import MapView, {Geojson} from "react-native-maps";
import {Dimensions, StyleSheet} from "react-native";
import MetroLineData from '../data/Metro_Lines_Regional.json'
import BottomSheetComponent from "./BottomSheetComponent";
import {useState} from "react";


const Map = ({}) => {

    const [mapRef, setMapRef] = useState(null)

    const [boundingBox, setBoundingBox] = useState({
        northEast: {
            latitude: 39.36025421133267,
            longitude: -76.79485268890858,
        },
        southWest: {
            latitude: 38.53966026202137,
            longitude: -77.32396367937326,
        }
    })

    const OnMapReady = () => {
        mapRef.setMapBoundaries(boundingBox.northEast, boundingBox.southWest)
    }

    const GeoJsonComponents = () => {

        let components = []

        MetroLineData.features.map(feature => {
            const insertedObject = {
                features: [feature]
            };

            if (feature.properties.NAME === 'blue') {
                components.push(
                    <Geojson
                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={'blue'}
                        strokeWidth={5}
                    />
                )
            } else {
                components.push(
                    <Geojson
                        key={feature.properties.NAME}
                        geojson={insertedObject}
                        strokeColor={'blue'}
                        strokeWidth={5}
                    />
                )
            }

        })

        return components
    }

    return (
        <>
            <MapView
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
            >
                {GeoJsonComponents()}
            </MapView>
            <BottomSheetComponent/>
        </>


    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map
