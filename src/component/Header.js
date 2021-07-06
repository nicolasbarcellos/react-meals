import { BiCart as CartIcon } from "react-icons/bi";
import { CountCart } from "./CountCart";
import "../styles/header.scss";
import { useContext, useState } from "react";
import { MealContext } from "../context/mealContext";
import { Modal } from "../component/Modal";

export function Header() {
	const { mealInfo } = useContext(MealContext);
	const [modalShow, setModalShow] = useState(false);

	// const count = items.reduce((a, b) => +a + +b.count, 0);



	function handleModal() {
		setModalShow(false);
	}

	function showModal() {
		setModalShow(true);
	}

	return (
		<header className="header">
			{modalShow && (
				<Modal count={mealInfo.count} meals={mealInfo.items} onClick={handleModal} />
			)}
			<h1>React Meals</h1>
			<div className="CartWrapper" onClick={showModal}>
				<CartIcon />
				<h3>Your Cart</h3>
				<CountCart>{mealInfo.count ?? "0"}</CountCart>
			</div>
		</header>
	);
}
