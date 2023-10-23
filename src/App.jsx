import { useState } from 'react';
import Tarjeta from './components/tarjeta/Tarjeta';

const App = () => {
	const [check, setCheck] = useState(true);

	return (
		<>
			<label>Month</label>
			<input type='checkbox' onChange={event => okcheck(event, setCheck)} />

			<Tarjeta color='#fff' text={check ? '10' : '20'}></Tarjeta>
			<Tarjeta color='#696EDD' text={check ? '30' : '40'}></Tarjeta>
			<Tarjeta color='#fff' text={check ? '50' : '60'}></Tarjeta>
		</>
	);
};

const okcheck = (event, setCheck) => {
	setCheck(event.target.checked);
};

export default App;
