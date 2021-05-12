import React, { useRef, useContext, useState } from "react";
import { Context } from "../store/appContext";

export default function SearchBar() {
	const { store, actions } = useContext(Context);

	const [list, setList] = useState([]);

	const autoComplete = event => {
		let search = event.target.value;

		if (search.length > 0) {
			let result = [];

			store.characters.forEach(elem => {
				if (elem.name.toLowerCase().startsWith(search.toLowerCase())) {
					result.push({ id: elem.uid, name, type: "peoples" });
				}
			});

			setList(result);
		} else {
			setList([]);
		}
	};

	return (
		<div className="container d-flex justify-content-center">
			<div className="col-12 col-md-6">
				<input className="form-control" type="text" placeholder="Type to search.." onKeyUp={autoComplete} />
				<ul className="list-group autocom-box">
					{list.map((elem, index) => {
						return (
							<li key={index} className="list-group-item list-group-item-action">
								{elem.name}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
