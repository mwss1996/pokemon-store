export interface ProductState {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}
export interface StoreStateType {
	shoppingCart: ProductState[];
}
export const EMPTY_STATE: StoreStateType = {
	shoppingCart: []
};
