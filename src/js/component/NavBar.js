import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NavBar = () => {
	const { store, actions } = useContext(Context);

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
							{store.favourites.length > 0 ? (
								store.favourites.map((favourite, index) => {
									return (
										<div key={index} className="dropdown-item">
											<div className="row justify-content-between align-items-center">
												<div className="col">{favourite.name}</div>
												<div className="col-2 text-danger">
													<i
														className="fas fa-trash"
														onClick={() => {
															actions.removeFavourite(favourite.id, favourite.type);
														}}
													/>
												</div>
											</div>
										</div>
									);
								})
							) : (
								<div className="dropdown-item">No favourites...</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
