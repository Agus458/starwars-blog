import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "../component/Card";

export default function CardList(props) {
	const { store, actions } = useContext(Context);

	return (
		<>
			<h1 className="text-warning mt-5">{props.title}</h1>
			<div className="overflow-auto row flex-row flex-nowrap p-3">
				{props.array.map(element => {
					return (
						<Card
							obj={element}
							key={element.uid}
							favourite={actions.isAdded(element.uid, element.type, store.favourites) != null}
						/>
					);
				})}
			</div>
		</>
	);
}

CardList.propTypes = {
	title: PropTypes.string,
	array: PropTypes.array
};
