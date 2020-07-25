import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { EMPTY_STATE, ProductState } from "./states";
import { reduceReducers } from "./reducers/reduceReducers";
import { shoppingCartReducer } from "./reducers/shoppingCart/reducer";
import { setPokemonList } from "../api/endpoints";
import { Loading } from "../screens/shared/Loading";

interface StoreContainerProps {
	children: React.ReactNode;
}
export function StoreContainer(props: StoreContainerProps) {
	const initialState = EMPTY_STATE;
	const store = createStore(
		reduceReducers(initialState, shoppingCartReducer)
	);
	const [apiReady, setApiReady] = React.useState({
		loading: true,
		pokemonCount: 150,
		currentPokemon: 0,
		error: false,
		errorMessage: null
	});
	React.useEffect(() => {
		(async function fillFakeAPI() {
			try {
				const pokemonList: ProductState[] = [];
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/?limit=${apiReady.pokemonCount}`,
					{
						method: "GET"
					}
				);
				const jsonResponse = await response.json();
				console.log(jsonResponse);
				for (
					let index = 0;
					index < jsonResponse.results.lenght;
					index++
				) {
					console.log(index);
					setApiReady({
						...apiReady,
						currentPokemon: index
					});
					const pokemonData = await fetch(
						jsonResponse.results[index].url,
						{
							method: "GET"
						}
					);
					const jsonPokemonData = await pokemonData.json();
					pokemonList.push({
						id: jsonPokemonData.id,
						name: jsonPokemonData.name,
						imageUrl: jsonPokemonData.sprites.front_default,
						price: Math.random() * 100
					});
				}
				setPokemonList(pokemonList);
				setApiReady({
					...apiReady,
					loading: false
				});
			} catch (error) {
				setApiReady({
					...apiReady,
					error: true,
					errorMessage: error.message || "Unknown error"
				});
			}
		})();
	}, []);
	if (apiReady.loading) {
		return (
			<Loading
				currentPokemon={apiReady.currentPokemon}
				pokemonCount={apiReady.pokemonCount}
			/>
		);
	}
	if (apiReady.error) {
		return (
			<div>
				<div>Please, try again.</div>
				<div>There was an error while loading the pokemon list.</div>
				<div>apiReady.errorMessage</div>
			</div>
		);
	}
	return <Provider store={store}>{props.children}</Provider>;
}
