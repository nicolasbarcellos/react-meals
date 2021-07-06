import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { Meals } from "./component/Meals";
import { MealProvider } from "./context/mealContext";
import { Modal } from "./component/Modal";
import "./global.scss";

export default function App() {
	return (
		<div id="page">
			<MealProvider>
				<Header />
				<Home />
				<Meals />
			</MealProvider>
		</div>
	);
}
