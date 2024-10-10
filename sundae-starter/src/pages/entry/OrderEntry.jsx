import Options from './Options';

export default function OrderEntry() {
	return (
		<div>
			<Options optionType="scoops" />
			<Options optionType="toppings" />

			<h2>Grand Total: $0.00</h2>
		</div>
	);
}
