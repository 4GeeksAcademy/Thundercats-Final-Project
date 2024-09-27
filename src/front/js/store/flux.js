// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 		store: {
// 			//list of games, user
// 			games: [],//list because there will be multiple games per user
// 			user: {}//object because there is just one user
// 		},
// 		actions: {
// 			//these are the functions that determine what happens on the USER'S end
// 			login: async () => {
// 				let options = {
// 					method: 'POST',
// 					headers: {
// 						"Content-Type": "application/json", //telling the server what type of data/request we're going to be sending
// 						//Authorization: "Bearer " + sessionStorage.getItem("token")
// 					},
// 					body: JSON.stringify({
// 						"email": formData.email,
// 						"password": formData.password
// 					})
// 				}
// 				let response = await fetch(process.env.BACKEND_URL + "api/signup", options)
// 				if (!response.ok) {
// 					console.log("An Error Occured while Signing in", response.status)
// 					return false
// 				} else if (response.ok) {
// 					console.log("Successfully Signed In", response.status)
// 					return true
// 				},
// 				signup: async (formData) => {
// 					//we can add a function in this function LATER NOT NOW DEFINITELY NOT NOW. WHERE A TOKEN IS GENERATED UPON SIGNUP
// 					let options = {
// 						method: 'POST',
// 						headers: {
// 							"Content-Type": "application/json", //telling the server what type of data/request we're going to be sending
// 						},
// 						body: JSON.stringify({
// 							"name": formData.name,
// 							"email": formData.email,
// 							"password": formData.password
// 						})
// 					}
// 					let response = await fetch(process.env.BACKEND_URL + "api/signup", options)
// 					if (!response.ok) {
// 						console.log("An Error Occured while Signing up", response.status)
// 						return false
// 					} else if (response.ok) {
// 						console.log("Successfully Sign Up", response.status)
// 						return true
// 					}


// 				},
// 					getUser: async () => {
// 						//this is going to cnnect with the PATCH method
// 						let options = {
// 							headers: {
// 								"Content-Type": "application/json", //telling the server what type of data/request we're going to be sending
// 								Authorization: "Bearer " + sessionStorage.getItem("token")
// 							}
// 						}
// 						let response = await fetch(process.env.BACKEND_URL + "api/user", options)
// 						if (response.status !== 200) {
// 							console.log("An Error Occurred While Trying to Get the User", response.status)
// 							return false
// 						}
// 						let data = await response.json()  //will get the data out of the response
// 						setStore({ user: data })
// 						return true
// 					},
// 						editUser: async (newUserInfo) => {
// 							//this is going to cnnect with the PATCH method
// 							let options = {
// 								method: 'PATCH',
// 								headers: {
// 									"Content-Type": "application/json", //telling the server what type of data/request we're going to be sending
// 									Authorization: "Bearer " + sessionStorage.getItem("token")
// 								},
// 								body: JSON.stringify({
// 									name: newUserInfo.name,
// 									email: newUserInfo.email,
// 									password: newUserInfo.password
// 								})
// 							}
// 							let response = await fetch(process.env.BACKEND_URL + "api/edit-user", options)
// 							if (response.status !== 200) {
// 								console.log("An Error Occurred While Trying to Edit the User", response.status)
// 								return false
// 							}
// 							let data = await response.json()  //will get the data out of the response
// 							setStore({ user: data })
// 							return true
// 						},
// 							addFavorites: async (newGameId) => {
// 								let options = {
// 									method: 'POST',
// 									headers: {
// 										"Content-Type": "application/json", //telling the server what type of data/request we're going to be sending
// 										Authorization: "Bearer " + sessionStorage.getItem("token")
// 									},
// 									body: JSON.stringify({
// 										game_id: newGameId
// 									})
// 								}
// 								let response = await fetch(process.env.BACKEND_URL + "api/favorites", options)
// 								if (response.status !== 200) {
// 									console.log("An Error Occurred While Trying to Favorite a Game", response.status)
// 									return false
// 								}
// 								let data = await response.json()  //will get the data out of the response
// 								console.log(data)
// 								getActions().getUser() //this refreshes the user after we add a favorite
// 								return true
// 							},
// 								deleteFavorites: async (favoriteId) => {
// 									//This will communicate with the delete_favorite function from the backend to make a request to delete favorite from the Database as well.
// 									let options = {
// 										method: 'DELETE',
// 										headers: {
// 											"Content-Type": "application/json", //telling the server what type of data/request we're going to be sending
// 											Authorization: "Bearer " + sessionStorage.getItem("token")
// 										},
// 										body: JSON.stringify({
// 											favorite_id: favoriteId
// 										})
// 									}
// 									let response = await fetch(process.env.BACKEND_URL + "api/favorite_delete", options)
// 									if (response.status !== 204) {
// 										console.log("An Error Occurred While Trying to Delete a Favorite Game", response.status)
// 										return false
// 									}
// 									getActions().getUser() //this refreshes the user after we add a favorite and will execute if IF statement on 86 isn't true
// 									return true
// 								},
// 									getGames: async () => {
// 										let options = {
// 											headers: {
// 												"Content-Type": "application/json", //telling the server what type of data/request we're going to be sending
// 											}
// 										}
// 										let response = await fetch(process.env.BACKEND_URL + "api/games", options)
// 										if (response.status !== 200) {
// 											console.log("An Error Occurred While Trying to Load the Game", response.status)
// 											return false
// 										}
// 										let data = await response.json()  //will get the data out of the response
// 										console.log(data)
// 										setStore({ games: data }) //games is FROM THE STORE above
// 										return true
// 									}
// 			//we make them async because we need to wait for a response for it to know what to do
// 			//wait until you get the response and then bring it back
// 		}
// 		}
// 	}};

// 	export default getState;

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: null,
            // list of games, user
            games: [], // list because there will be multiple games per user
            user: null,   // object because there is just one user
            favorites: [] //declaring or INITIALIZING an empty array
        },
        actions: {
            filterGames: async (genre) => {
                let options = {
                    headers: {
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                        'X-RapidAPI-Key': '2e240ebbcfmshe7dd173b3cb55d7p1e9497jsna56b128e8714',
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                    }
                };
                let response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=" + genre, options);
                if (response.status !== 200) {
                    console.log("An Error Occurred While Trying to Filter the Games", response.status);
                    return false;
                }
                let data = await response.json(); // will get the data out of the response
                setStore({ games: data });
                console.log(data, "Filter Games");
                return true;
            },

            addGamesToDb: async () => {
                let store = getStore()
                let resp = await fetch(process.env.BACKEND_URL + "api/add-games", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(store.games)
                })
                if (!resp.ok) {
                    console.log("Games were not added to the backend")
                } else console.log("Games successfully added, check the backend")

                // Once this fetch return the Array with games, call an API endpoint that will receive these games
                // And store them in the backend
                // POST REQUEST to backend and send games array, based on this you can then trigger backend endpoints
                // with previously stored games from this fetch
                // name, genre
                // name, genre, release_date, image, description

            },
            getGames: async () => {
                let options = {
                    headers: {
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                    }
                };
                let response = await fetch(process.env.BACKEND_URL + "api/games", options);
                if (response.status !== 200) {
                    console.log("An Error Occurred While Trying to Load the Game", response.status);
                    return false;
                }
                let data = await response.json(); // will get the data out of the response
                console.log(data);
                setStore({ games: data }); // games is FROM THE STORE above
                localStorage.setItem("gamesAdded", "true")
                return true;
            },

            fetchGames: async () => {
                let options = {
                    headers: {
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                        'X-RapidAPI-Key': '2e240ebbcfmshe7dd173b3cb55d7p1e9497jsna56b128e8714',
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                    }
                };

                if (localStorage.getItem('gamesAdded')) {
                    await getActions().getGames()
                    console.log("Games have already been added.");

                    return null;
                }else {

                let response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", options);
                if (response.status !== 200) {
                    console.log("An Error Occurred While Trying to Fetch the Games", response.status);
                    return false;
                }
                let data = await response.json(); // will get the data out of the response
                // setStore({ games: data });

                let limitedGames = data.slice(0, 10);
                // 

                let resp = await fetch(process.env.BACKEND_URL + "api/add-games", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(limitedGames)
                })
                if (!resp.ok) {
                    console.log("Games were not added to the backend")
                } else {
                    console.log("Games successfully added, check the backend")
                    localStorage.setItem("gamesAdded", "true")
                    
                }
                console.log(data, "Fetch Games");
                await getActions().getGames()
                return true;
            }},



            login: async (formData) => {
                let options = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                    },
                    body: JSON.stringify({
                        "email": formData.email,
                        "password": formData.password
                    })
                };
                let response = await fetch(process.env.BACKEND_URL + "api/login", options);
                if (!response.ok) {
                    console.log("An Error Occurred while Signing in", response.status);
                    return false;
                } else {
                    const data = await response.json()
                    sessionStorage.setItem("token", data.token)
                    setStore({token : data.token})
                    console.log("Successfully Signed In", response.body);
                    return true;
                }
            },

            signup: async (formData) => {
                let options = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                    },
                    body: JSON.stringify({
                        "name": formData.name,
                        "email": formData.email,
                        "password": formData.password
                    })
                };
                let response = await fetch(process.env.BACKEND_URL + "api/signup", options);
                if (!response.ok) {
                    console.log("An Error Occurred while Signing up", response.status);
                    return false;
                } else {
                    console.log("Successfully Signed Up", response.status);
                    return true;
                }
            },

            getUser: async () => {
                let options = {
                    headers: {
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                        Authorization: "Bearer " + sessionStorage.getItem("token")
                    }
                };
                let response = await fetch(process.env.BACKEND_URL + "api/user", options);
                if (response.status !== 200) {
                    console.log("An Error Occurred While Trying to Get the User", response.status);
                    return false;
                }
                let data = await response.json(); // will get the data out of the response
                setStore({ user: data });
                return true;
            },

            editUser: async (newUserInfo) => {
                let options = {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                        Authorization: "Bearer " + sessionStorage.getItem("token")
                    },
                    body: JSON.stringify({
                        name: newUserInfo.name,
                        email: newUserInfo.email,
                        password: newUserInfo.password
                    })
                };
                let response = await fetch(process.env.BACKEND_URL + "api/edit-user", options);
                if (response.status !== 200) {
                    console.log("An Error Occurred While Trying to Edit the User", response.status);
                    return false;
                }
                let data = await response.json(); // will get the data out of the response
                setStore({ user: data });
                return true;
            },

            addFavorites: async (newGameId, user) => {
                console.log("clicked", user)
                let options = {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                        Authorization: "Bearer " + sessionStorage.getItem("token")
                    },
                    body: JSON.stringify({
                        game_id: newGameId,
                        user_id: user.id
                    })
                };
                let response = await fetch(process.env.BACKEND_URL + "api/favorites", options);
                if (response.status !== 200) {
                    console.log("An Error Occurred While Trying to Favorite a Game", response.status);
                    return false;
                }
                let data = await response.json(); // will get the data out of the response
                console.log(data);
                getActions().getUser(); // this refreshes the user after we add a favorite
                return true;
            },

            deleteFavorites: async (favoriteId) => {
                let options = {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json", // telling the server what type of data/request we're going to be sending
                        Authorization: "Bearer " + sessionStorage.getItem("token")
                    },
                    body: JSON.stringify({
                        favorite_id: favoriteId
                    })
                };
                let response = await fetch(process.env.BACKEND_URL + "api/favorite_delete", options);
                if (response.status !== 204) {
                    console.log("An Error Occurred While Trying to Delete a Favorite Game", response.status);
                    return false;
                }
                getActions().getUser(); // this refreshes the user after we add a favorite and will execute if IF statement on 86 isn't true
                return true;
            },


        }
    };
};

export default getState;