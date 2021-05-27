import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export default function Login() {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = event => {
		event.preventDefault();
		actions.login(email, password);
		window.location.href = "/";
	};

	return (
		<div className="container d-flex justify-content-center mt-5">
			<div className="card bg-black text-white">
				<div className="card-body">
					<form onSubmit={login}>
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
							<small id="emailHelp" className="form-text text-muted">
								We will never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								onChange={e => setPassword(e.target.value)}
								value={password}
							/>
						</div>
						<button type="submit" className="btn btn-warning btn-block">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
