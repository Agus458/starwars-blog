import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Description() {
	const params = useParams();

	const [description, setDescription] = useState();
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			setDescription(actions.getData(params.uid, params.type));
		},
		[params]
	);

	return (
		<div>
			<div className="container my-5">
				{description ? (
					<div className="card bg-black text-light">
						<div className="card-body">
							<h3 className="card-title text-warning mb-3">{description.name}</h3>

							{Object.keys(description.properties).map((property, index) => {
								return (
									<p key={index} className="card-text">
										<strong>{property}: </strong>
										{description.properties[property]}
									</p>
								);
							})}
						</div>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}
