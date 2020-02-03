/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
	iconUrl: require('leaflet/dist/images/marker-icon.png'),
	shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapChart = () => {
	const positionOfChurch = [52.252167, 21.212835];
	const positionOfMap = [52.252167, 21.22];
	if (typeof window !== 'undefined') {
		return (
			<Map center={positionOfMap} zoom={14} style={{ height: '400px' }}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={positionOfChurch}>
					<Popup>Parafia Opatrzności Bożej Warszawa Wesoła</Popup>
				</Marker>
			</Map>
		);
	}

	return null;
};

export default MapChart;
