const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            // Use getActions to call a function within a function
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => {
                // get the store
                const store = getStore();

                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                // reset the global store
                setStore({ demo: demo });
            },

            // Fetch user profile from backend
            getUserProfile: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/user/profile");
					const data = await response.json();
					setStore({ user: data });
				} catch (error) {
					console.error("Error fetching user profile:", error);
				}
			},
			
            
            // Remove favorite game
            removeFavoriteGame: async (gameId) => {
				try {
					const response = await fetch(`/api/user/removeFavoriteGame`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ gameId })
					});
					if (response.ok) {
						// Update the store by fetching the updated profile
						await getActions().getUserProfile();
					} else {
						throw new Error('Failed to remove favorite game');
					}
				} catch (error) {
					console.error("Error removing favorite game:", error);
				}
			},
			
        }
    };
};

export default getState;
