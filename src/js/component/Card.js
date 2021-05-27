import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default function Card(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-12 col-md-6 col-xl-4 mb-3">
			<div className="card bg-black text-light">
				<img src={props.element.img} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.element.name}</h5>

					<p className="text-truncate">{props.element.description}</p>
				</div>
				<div className="card-footer">
					<div className="row">
						<div className="col">
							<Link to={`/description/${props.type}/${props.element.id}`}>
								<button type="button" className="btn btn-outline-warning">
									Go to description
								</button>
							</Link>
						</div>
						<div className="col-3 text-right">
							<button
								className="btn btn-danger"
								onClick={() => {
									actions.addFavourite(props.element.id, props.element.name, props.type);
								}}>
								<i className={`${props.favourite ? "fas" : "far"} fa-heart`} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	element: PropTypes.object,
	type: PropTypes.string,
	favourite: PropTypes.bool
};
