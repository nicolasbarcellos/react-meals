import { useContext } from "react";
import { MealContext } from "../context/mealContext";
import { InputMeal } from "../component/InputMeal";
import "../styles/mealItem.scss";

export function MealItem() {
	const { DUMMY_MEALS } = useContext(MealContext);


	return (
		<ul>
			{DUMMY_MEALS.map((meal) => {
				return (
					<li key={meal.id}>
						<div className="meal-info">
							<div className="meal-name">{meal.name}</div>
							<div className="meal-desc">{meal.description}</div>
							<div className="meal-price">${meal.price.toFixed(2)}</div>
						</div>
						<div className="meal-amount">
							<InputMeal
								id={meal.id}
								type="number"
								defaultValue="1"
								min="0"
								max="5"
							/>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
