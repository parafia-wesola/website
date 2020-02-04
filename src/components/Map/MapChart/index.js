/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import * as React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { StyledMap } from './styles';

const MapChart = () => {
	const positionOfChurch = [52.252167, 21.212835];
	const positionOfMap = [52.252167, 21.22];
	const iconPerson = new L.Icon({
		iconUrl: require('assets/images/circle.png'),
		iconAnchor: null,
		popupAnchor: null,
		shadowUrl: null,
		shadowSize: null,
		shadowAnchor: null,
		iconSize: new L.Point(75, 75),
	});

	if (typeof window !== 'undefined') {
		return (
			<StyledMap as={Map} center={positionOfMap} zoom={14}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={positionOfChurch} icon={iconPerson}>
					<Popup>Parafia Opatrzności Bożej Warszawa Wesoła</Popup>
				</Marker>
			</StyledMap>
		);
	}

	return null;
};

export default MapChart;
