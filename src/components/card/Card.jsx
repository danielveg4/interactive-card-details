const Card = ({ datos }) => {
	return (
		<div>
			<h1>Card</h1>
			<p>Número: {datos.number}</p>
			<p>Expiration date</p>
			<p>Cardholder name</p>
			<p>CVV</p>
		</div>
	);
};

export default Card;
