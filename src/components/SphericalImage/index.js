import React from 'react';
import PropTypes from 'prop-types';
import { Pannellum } from 'pannellum-react';

const SphericalImage = ({ image }) => (
	<Pannellum
		width="1360px"
		height="500px"
		image={image}
		pitch={10}
		yaw={180}
		hfov={110}
		autoLoad
		showZoomCtrl={false}
	/>
);

SphericalImage.propTypes = {
	image: PropTypes.string.isRequired,
};

export default SphericalImage;
