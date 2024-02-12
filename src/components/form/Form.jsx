import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../card/Card';

const Form = () => {
	const [datos, setDatos] = useState({});
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();
	console.log(datos);
	return (
		<>
			<h1>Soy un formulario</h1>

			<form onSubmit={handleSubmit(datos => formSubmit(datos, setDatos))}>
				<div>
					<label htmlFor='name'>CARDHOLDER NAME</label>
					<input
						type='text'
						placeholder='name'
						id='name'
						{...register('name', {
							required: 'e.g. Jane Applessed',
							pattern: {
								value: /^[a-z]*$/,
								message: 'No puede contener números ni caracteres especiales'
							}
						})}
					/>
					<span>{errors?.name?.message}</span>
				</div>
				<div>
					<label htmlFor='number'>CARD NUMBER</label>
					<input
						type='numeric'
						placeholder='e.g. 1234 5678 1234 5678'
						id='number'
						{...register('number', {
							required: 'Número de tarjeta requerido'
						})}
					/>
					<span>{errors?.email?.message}</span>
				</div>
				<div>
					<label htmlFor='date'>EXPIRATION DATE</label>
					<input
						type='date'
						placeholder='e.g. 01/23'
						id='date'
						{...register('date', {
							required: 'Fecha de expiración requerida'
						})}
					/>
				</div>
				<div>
					<label htmlFor='cvv'>CVV</label>
					<input
						type='numeric'
						placeholder='e.g. 123'
						id='cvv'
						{...register('cvv', {
							required: 'CVV requerido'
						})}
					/>
				</div>
				<input type='submit' value='SEND' />
			</form>
			<Card datos={datos} />
		</>
	);
};

const formSubmit = (datos, setDatos) => {
	setDatos(datos);
};

export default Form;
