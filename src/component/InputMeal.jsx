import { useContext, useRef, useState } from "react";
import { MealContext } from "../context/mealContext";
import "../styles/inputMeal.scss";
import { Button } from "../component/Button";

export function InputMeal(props) {
	const { addMeal, DUMMY_MEALS } = useContext(MealContext);
	// const [totalAmount, setTotalAmount] = useState([]);
	const inputRef = useRef();

	function handleSubmitCart(event) {
		event.preventDefault();
		const mealId = inputRef.current.getAttribute("id");
		const existingMeal = DUMMY_MEALS.filter((meal) => meal.id === mealId);
		let totalAmount; 
		for (let { price } of existingMeal) {
			totalAmount = price;
		}
		addMeal({
			items: existingMeal,
			count: inputRef.current.value,
			totalAmount,
		});

	}

	return (
		<form onSubmit={handleSubmitCart}>
			<label htmlFor={props.id}>Amount</label>
			<input ref={inputRef} {...props} />
			<Button type="submit">+ Add</Button>
		</form>
	);
}
