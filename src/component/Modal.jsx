import "../styles/modal.scss";
import ReactDOM from "react-dom";
import { Button } from "../component/Button";
import { useContext } from "react";
import { MealContext } from "../context/mealContext";

const Backdrop = (props) => {
	return <div onClick={props.onClick} className="backdrop"></div>;
};

const ModalOverlay = (props) => {
	const { mealInfo } = useContext(MealContext);
	const { items } = mealInfo;

	const totalAmount = items.reduce((a, b) => b.totalAmount * b.count + a, 0);

	const meals = items.map(a => Object.keys(a));

	console.log(meals);

	return (
		<div className="modal">
			<div className="modal-wrapper">
				<div className="modal-content">
					<h2>Total Amount</h2>
					<p>${totalAmount.toFixed(2)}</p>
				</div>
				<ul className="modal-meals">
					{props.meals.map((meal) => {
						return (
							<li key={meal.id} className="mealsCart">
								<div>
									<h2>{meal.name}</h2>
								</div>
								<div className="amount">
									<div className="price">${meal.price}</div>
									<div className="count">x{props.count}</div>
								</div>
							</li>
						);
					})}
				</ul>
				<Button onClick={props.onClick}>Close</Button>
			</div>
		</div>
	);
};

const portalElement = document.getElementById("modal-root");

export function Modal(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={props.onClick} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					meals={props.meals}
					count={props.count}
					onClick={props.onClick}
				/>,
				portalElement
			)}
		</>
	);
}
