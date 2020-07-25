import { ProductState } from "./../store/states";

let pokemonList: ProductState[] = [];
export function setPokemonList(newPokemonList: ProductState[]) {
	pokemonList = newPokemonList;
}
export async function getDisplay(): Promise<ProductState[]> {
	return pokemonList;
}
export async function searchPokemon(search: string): Promise<ProductState[]> {
	return pokemonList.filter(pokemon =>
		pokemon.name
			.toLocaleLowerCase()
			.includes(search.trim().toLocaleLowerCase())
	);
}
