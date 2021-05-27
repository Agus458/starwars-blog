const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favourites: []
		},
		actions: {
			loadSomeData: () => {
				fetch(process.env.API_URL + "/planets")
					.then(response => response.json())
					.then(data => setStore({ planets: data }));

				fetch(process.env.API_URL + "/characters")
					.then(response => response.json())
					.then(data => setStore({ characters: data }));
			},

			addFavourite: (id, name, type) => {},

			removeFavourite: (id, type) => {},

			isAdded: (id, type, arr) => {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].id === id && arr[i].type === type) {
						return true;
					}
				}
				return false;
			},

			login: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch(process.env.API_URL + "/login", requestOptions)
					.then(response => response.json())
					.then(result => {
						if (result.user) {
							sessionStorage.setItem("user", JSON.stringify(result.user));
							sessionStorage.setItem("token", result.token);
						}
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
