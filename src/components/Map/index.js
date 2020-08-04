import React from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';

const LeafletMap = ({ targetPos, mapPos, iconImg, zoom, className }) => {
	if (typeof window === 'undefined') return null;

	const icon = new L.Icon({
		iconUrl: iconImg,
		iconSize: new L.Point(75, 75),
	});

	return (
		<Map
			center={mapPos || targetPos}
			zoom={zoom}
			className={className}
			dragging={!L.Browser.mobile}
			scrollWheelZoom={false}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={targetPos} icon={icon} />
		</Map>
	);
};

LeafletMap.propTypes = {
	targetPos: PropTypes.arrayOf(PropTypes.number).isRequired,
	mapPos: PropTypes.arrayOf(PropTypes.number),
	iconImg: PropTypes.string,
	zoom: PropTypes.number,
	className: PropTypes.string,
};

LeafletMap.defaultProps = {
	mapPos: null,
	iconImg: null,
	zoom: 15,
	className: null,
};

export default LeafletMap;
