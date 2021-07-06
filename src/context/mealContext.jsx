import { createContext, useState } from "react";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99
	},
	{
		id: "m2",
		name: "Schnitzel",
		description: "A german specialty!",
		price: 16.5
	},
	{
		id: "m3",
		name: "Barbecue Burger",
		description: "American, raw, meaty",
		price: 12.99
	},
	{
		id: "m4",
		name: "Green Bowl",
		description: "Healthy...and green...",
		price: 18.99
	}
];

export const MealContext = createContext({});

export const MealProvider = (props) => {
	const [items, setItems] = useState([]);
	const [count, setCount] = useState(0);
	const [totalAmount, setTotalAmount] = useState([]);

	function addMeal({ items, count, totalAmount }) {
		if (items.length > 0) {
			setItems((item) => [...item, items]);
			setCount(oldCount => oldCount += +count);
			setTotalAmount(totalAmount);
		}
	}



	const mealInfo = {
		items,
		addMeal,
		count,
		totalAmount
	};

	return (
		<MealContext.Provider value={{ DUMMY_MEALS, addMeal, mealInfo }}>
			{props.children}
		</MealContext.Provider>
	);
};
