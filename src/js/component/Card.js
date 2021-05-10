import React from "react";
import PropTypes from "prop-types";

export default function Card(props) {
	return (
		<div className="col-4 mb-3">
			<div className="card">
				<img
					src="https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<div className="row">
						<div className="col">
							<a href={`/description/${props.uid}`} className="btn btn-primary">
								Go to description
							</a>
						</div>
						<div className="col-3 text-right">
							<button className="btn btn-danger">
								<i className="far fa-heart" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	uid: PropTypes.number
};
