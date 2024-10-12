import MapView, { Marker } from "react-native-maps";
import { Button, View } from "react-native";
import { useEffect, useState } from "react";

export default function MyMap(props){
    const [region, setRegion] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    })
    useEffect(() => {
        if(props.latitude && props.longitude){
            setRegion({
                latitude: props.latitude,
                longitude: props.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005, 
            });
        } 
    }, [props.latitude,props.longitude])

    return (
        <MapView
            style = {{width:'100%', height: '100%'}}
            region={region}
            onRegionChangeComplete={setRegion}
        >   
            <Marker 
                coordinate={{
                    latitude: props.latitude,
                    longitude: props.longitude,
                }}
            

            />       
        </MapView>

    );
}