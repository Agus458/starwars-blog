import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import CardList from "../component/CardList";
import SearchBar from "../component/SearchBar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-5">
			{store.characters.length > 0 && store.planets.length > 0 ? (
				<>
					<SearchBar />
					<CardList title="Characters" array={store.characters} type="character" />
					<CardList title="Planets" array={store.planets} type="planet" />
				</>
			) : (
				<div className="alert alert-info" role="alert">
					Cargando ...
				</div>
			)}
		</div>
	);
};
