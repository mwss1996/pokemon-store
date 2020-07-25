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
const apiOffset = 0;
const apiLimit = 151;
export function StoreContainer(props: StoreContainerProps) {
	const initialState = EMPTY_STATE;
	const store = createStore(
		reduceReducers(initialState, shoppingCartReducer)
	);
	const [apiReady, setApiReady] = React.useState({
		loading: true,
		currentPokemonIndex: 0,
		error: false,
		errorMessage: null
	});
	React.useEffect(() => {
		(async function fillFakeAPI() {
			try {
				const pokemonList: ProductState[] = [];
				const response = await fetch(
					`https://pokeapi.co/api/v2/pokemon/?offset=${apiOffset}&limit=${apiLimit}`,
					{
						method: "GET"
					}
				);
				const jsonResponse = await response.json();
				for (
					let index = 0;
					index < jsonResponse.results.length;
					index++
				) {
					setApiReady({
						...apiReady,
						currentPokemonIndex: index
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
				currentPokemonIndex={apiReady.currentPokemonIndex + 1}
				pokemonCount={apiLimit}
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
