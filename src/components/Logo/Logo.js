import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt className="Tilt Custom br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner pa3">
			  <img style={{ height: 120, width: 100 }}src={brain} alt="Logo" />
			 </div>
			</Tilt>
		</div>
	)
}

export default Logo;