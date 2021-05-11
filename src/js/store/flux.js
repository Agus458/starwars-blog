const getState = ({ getStore, getActions, setStore }) => {
	async function getCharactes() {
		try {
			let res = await fetch("https://www.swapi.tech/api/people");
			let data = await res.json();
			setStore({ characters: data.results });
		} catch (error) {}
	}

	async function getPlanets() {
		try {
			let res = await fetch("https://www.swapi.tech/api/planets");
			let data = await res.json();
			setStore({ planets: data.results });
		} catch (error) {}
	}

	async function getStarships() {
		try {
			let res = await fetch("https://www.swapi.tech/api/starships");
			let data = await res.json();
			setStore({ starships: data.results });
		} catch (error) {}
	}

	function isAdded(id, type, arr) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id === id && arr[i].type === type) {
				return true;
			}
		}
		return false;
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
				getCharactes();
				getPlanets();
				getStarships();
			},

			addFavourite: (id, name, type) => {
				let favourites = getStore().favourites;
				if (!isAdded(id, type, favourites)) {
					let newFavourite = { id, name, type };
					let newFavourites = [...favourites, newFavourite];
					setStore({ favourites: newFavourites });
				}
			},

			removeFavourite: (id, type) => {
				let favourites = getStore().favourites;
				let newFavourites = favourites.filter(favourite => {
					return favourite.id != id || favourite.type != type;
				});
				setStore({ favourites: newFavourites });
			}
		}
	};
};

export default getState;
