
import "../styles/home.scss";
import mealImg from "../assets/meals.jpg";

export function Home() {
	return (
		<div className="home">
			<div className="home-img">
				<img src={mealImg} alt="Meal" />
			</div>
			<div className="home-content">
					<h2>Delicious Food, Delivered To You</h2>
					<p>
						Choose your favorite meal from our broad selection of available
						meals and enjoy a delicious lunch or dinner at home. All our meals
						are cooked with high-quality ingredients, just-in-time and of course
						by experienced chefs!
					</p>
			</div>
		</div>
	);
}
