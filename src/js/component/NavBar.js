import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<div className="navbar-brand">StarWars</div>
				</Link>
				<div className="ml-auto">
					<div className="btn-group">
						<button type="button" className="btn btn-primary">
							Favourites
						</button>
						<button
							type="button"
							className="btn btn-primary dropdown-toggle dropdown-toggle-split"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<span className="sr-only">Toggle Dropdown</span>
						</button>
						<div className="dropdown-menu dropdown-menu-right">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								Separated link
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
