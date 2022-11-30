import {useState} from "react";

const Bienvenida = () => {
	const [ valor, setValor] = useState(0);

	const sumar = () => {
		setValor(valor + 1);
		console.log(valor);
	}

	return (
		<div>
			{valor}
			<button onClick={sumar}>Incrementar</button>
		</div>
	)
}

export default Bienvenida;