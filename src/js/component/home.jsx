import React, { useState } from "react";

const Home = () => {
	const [color, setColor] = useState("");
	const [showPurple, setShowPurple] = useState(false); // Incializamos estado de la luz púrpura

	const handleClick = (selectedColor) => {
		setColor(selectedColor);
	};

	const addPurpleLight = () => {
		setShowPurple((prev => !prev)); // Activamos y desactivamos la luz púrpura
	};

	return (
		<div>
			<div className="traffic-light">
				<div
					className={`light red ${color === 'red' ? 'on' : ''}`}
					onClick={() => handleClick('red')}
				></div>
				<div
					className={`light yellow ${color === 'yellow' ? 'on' : ''}`}
					onClick={() => handleClick('yellow')}
				></div>
				<div
					className={`light green ${color === 'green' ? 'on' : ''}`}
					onClick={() => handleClick('green')}
				></div>

				{showPurple && (
					<div
						className={`light purple ${color === 'purple' ? 'on' : ''}`} // Renderizamos la luz púrpura si el estado de showPurple es true
						onClick={() => handleClick('purple')}
					></div>
				)}
			</div>
			<div className="botton">
				<button onClick={addPurpleLight}>Add/Delete Purple Light</button>
			</div>
		</div>
	);
};

export default Home;
