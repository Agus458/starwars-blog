import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import CardList from "../component/CardList";
import SearchBar from "../component/SearchBar";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mb-5">
			<SearchBar />
			<CardList title="Characters" array={store.characters} />
			<CardList title="Planets" array={store.planets} />
			<CardList title="Starships" array={store.starships} />
		</div>
	);
};
