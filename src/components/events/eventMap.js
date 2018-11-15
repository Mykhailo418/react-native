import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Location, Permissions, MapView} from 'expo';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';

@observer
class EventMap extends Component {
    static propTypes = {

    };

    @observable coords = null;
    @observable permissionGranted = false;

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        this.setPermission(status === 'granted');
        this.setCoords(await Location.getCurrentPositionAsync());
    }

   @action setPermission(isGranted) {
        this.permissionGranted = isGranted;
   }

   @action setCoords({coords}) {
        this.coords = coords;
   }

    render() {
        if (!this.permissionGranted) return <Text>No Permission</Text>;
        if (!this.coords) return <View/>;

        return (
            <MapView
                style = {styles.container}
                initialRegion = {{
                    ...this.coords
                }}
            >
                <MapView.Marker
                    coordinate = {{...this.coords}}
                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default EventMap;
