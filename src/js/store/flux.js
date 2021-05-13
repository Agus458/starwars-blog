const getState = ({ getStore, getActions, setStore }) => {
	async function getCharacters() {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => {
				let list = data.results;
				list.forEach(elem => {
					elem.type = "people";
					fetch(elem.url)
						.then(res => res.json())
						.then(data => (elem.properties = data.result.properties));
				});
				setStore({ characters: list });
			})
			.catch(err => console.error(err));
	}

	async function getPlanets() {
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => {
				let list = data.results;
				list.forEach(elem => {
					elem.type = "planets";
					fetch(elem.url)
						.then(res => res.json())
						.then(data => (elem.properties = data.result.properties));
				});
				setStore({ planets: list });
			})
			.catch(err => console.error(err));
	}

	async function getStarships() {
		fetch("https://www.swapi.tech/api/starships")
			.then(res => res.json())
			.then(data => {
				let list = data.results;
				list.forEach(elem => {
					elem.type = "starships";
					fetch(elem.url)
						.then(res => res.json())
						.then(data => (elem.properties = data.result.properties));
				});
				setStore({ starships: list });
			})
			.catch(err => console.error(err));
	}

	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favourites: []
		},
		actions: {
			loadSomeData: () => {
				getCharacters();
				getPlanets();
				getStarships();
			},

			addFavourite: (uid, name, type) => {
				let favourites = getStore().favourites;
				if (getActions().isAdded(uid, type, favourites) == null) {
					let newFavourite = getActions().getData(uid, type);
					let newFavourites = [...favourites, newFavourite];
					setStore({ favourites: newFavourites });
				} else {
					getActions().removeFavourite(uid, type);
				}
			},

			removeFavourite: (uid, type) => {
				let favourites = getStore().favourites;
				let newFavourites = favourites.filter(favourite => {
					return favourite.uid != uid || favourite.type != type;
				});
				setStore({ favourites: newFavourites });
			},

			isAdded: (uid, type, arr) => {
				for (let i = 0; i < arr.length; i++) {
					if (arr[i].uid === uid && arr[i].type === type) {
						return arr[i];
					}
				}
				return null;
			},

			getData: (uid, type) => {
				switch (type) {
					case "people":
						return getActions().isAdded(uid, type, getStore().characters);
					case "planets":
						return getActions().isAdded(uid, type, getStore().planets);
					case "starships":
						return getActions().isAdded(uid, type, getStore().starships);
				}
			}
		}
	};
};

export default getState;
