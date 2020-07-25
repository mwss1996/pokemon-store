import { StoreStateType } from "../../states";
import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	ShoppingCartAction,
	CLEAR_SHOPPING_CART
} from "./actions";

export function shoppingCartReducer(
	state: StoreStateType,
	action: ShoppingCartAction
): StoreStateType {
	switch (action.type) {
		case ADD_PRODUCT:
			return {
				...state,
				shoppingCart: [...state.shoppingCart, action.product]
			};
		case REMOVE_PRODUCT:
			const newShoppingCart = [...state.shoppingCart];
			newShoppingCart.splice(action.productIndex, 1);
			return {
				...state,
				shoppingCart: newShoppingCart
			};
		case CLEAR_SHOPPING_CART:
			return {
				...state,
				shoppingCart: []
			};
		default:
			return state;
	}
}
