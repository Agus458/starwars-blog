const getState = ({ getStore, getActions, setStore }) => {
	async function getCharactes() {
		try {
			let res = await fetch("https://www.swapi.tech/api/people");
			let data = await res.json();
			setStore({ characters: data.results });
		} catch (error) {}
	}

	return {
		store: {
			characters: [],
			planets: [],
			starships: []
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				getCharactes();
			}
		}
	};
};

export default getState;
