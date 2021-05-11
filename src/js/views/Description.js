import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Description() {
	const params = useParams();

	const [description, setDescription] = useState();

	async function getDescription() {
		try {
			let res = await fetch(`https://www.swapi.tech/api/${params.type}/${params.id}`);
			let data = await res.json();
			setDescription(data.result);
		} catch (error) {}
	}

	useEffect(() => {
		getDescription();
	}, []);

	return (
		<div>
			<div className="container">
				{description ? (
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">{description.properties.name}</h5>
							<h6 className="card-subtitle mb-2 text-muted">{description.description}</h6>

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
