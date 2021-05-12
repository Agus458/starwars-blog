import React, { useRef, useContext } from "react";
import { Context } from "../store/appContext";

export default function SearchBar() {
	const { store, actions } = useContext(Context);
	let autoCompleteBox = useRef();

	const autoComplete = event => {
		let search = event.target.value;

		let result = store.characters.filter(elem => {
			return elem.name.toLowerCase().startsWith(search.toLowerCase());
		});

		console.log(result);

		if (result.length > 0) {
			// autoCompleteBox.current.innerHTML = result.map((elem, index) => {
			// 	return (
			// 		<li key={index} className="list-group-item list-group-item-action">
			// 			{elem.name}
			// 		</li>
			// 	);
			// });
			console.log(
				result.map((elem, index) => {
					return (
						<li key={index} className="list-group-item list-group-item-action">
							{elem.name}
						</li>
					);
				})
			);
		} else {
			autoCompleteBox.current.innerHTML = (
				<li className="list-group-item list-group-item-action">No results...</li>
			);
		}
	};

	return (
		<div className="container d-flex justify-content-center">
			<div className="col-12 col-md-6">
				<input className="form-control" type="text" placeholder="Type to search.." onKeyUp={autoComplete} />
				<ul className="list-group autocom-box" ref={autoCompleteBox} />
			</div>
		</div>
	);
}
