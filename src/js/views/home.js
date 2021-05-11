import React, { useContext } from "react";
import "../../styles/home.scss";
import Card from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-3">
			<h1>Characters</h1>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.characters.map(character => {
					return <Card title={character.name} uid={character.uid} key={character.uid} type="people" />;
				})}
			</div>

			<h1 className="mt-5">Planets</h1>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.planets.map(planet => {
					return <Card title={planet.name} uid={planet.uid} key={planet.uid} type="planets" />;
				})}
			</div>

			<h1 className="mt-5">Starships</h1>
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.starships.map(starship => {
					return <Card title={starship.name} uid={starship.uid} key={starship.uid} type="starships" />;
				})}
			</div>
		</div>
	);
};
