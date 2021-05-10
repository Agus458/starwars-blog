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
					return <Card title={character.name} uid={character.uid} key={character.uid} />;
				})}
			</div>
		</div>
	);
};
