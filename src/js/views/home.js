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
			<CardList title="Characters" array={store.characters} type="people" />
			<CardList title="Planets" array={store.planets} type="planets" />
			<CardList title="Starships" array={store.starships} type="starships" />
		</div>
	);
};
