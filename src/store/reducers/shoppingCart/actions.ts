import { ProductState } from "../../states";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART";

export interface AddProductAction {
	type: typeof ADD_PRODUCT;
	product: ProductState;
}
export interface RemoveProductAction {
	type: typeof REMOVE_PRODUCT;
	productIndex: number;
}
export interface ClearShoppingCart {
	type: typeof CLEAR_SHOPPING_CART;
}

export type ShoppingCartAction =
	| AddProductAction
	| RemoveProductAction
	| ClearShoppingCart;

export function addProduct(product: ProductState) {
	return {
		type: ADD_PRODUCT,
		product
	};
}
export function removeProduct(productIndex: number) {
	return {
		type: REMOVE_PRODUCT,
		productIndex
	};
}
export function clearShoppingCart() {
	return {
		type: CLEAR_SHOPPING_CART
	};
}
