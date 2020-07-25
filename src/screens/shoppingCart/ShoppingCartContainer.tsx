import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlatformContext } from "../../PlatformProvider";
import { StoreStateType } from "../../store/states";
import {
	roundDecimalPlaces,
	uppercaseFirstLetter
} from "../../store/utils/helperFunctions";
import {
	clearShoppingCart,
	removeProduct
} from "./../../store/reducers/shoppingCart/actions";
import { Alert } from "./../shared/Alert";
import { Header } from "./presentational/Header";
import { Product } from "./presentational/Product";
import { ShoppingCart } from "./presentational/ShoppingCart";

export function ShoppingCartContainer() {
	const dispatch = useDispatch();
	const { platform } = React.useContext(PlatformContext);
	const [isDialogOpen, setIsDialogOpen] = React.useState(false);
	const shoppingCart = useSelector(
		(state: StoreStateType) => state.shoppingCart
	);
	const products = shoppingCart.map((product, index) => (
		<Product
			id={product.id}
			name={uppercaseFirstLetter(product.name)}
			price={"R$ " + roundDecimalPlaces(product.price, 2)}
			onClickRemove={() => dispatch(removeProduct(index))}
		/>
	));
	const total = shoppingCart.reduce(
		(accumulator, product) => accumulator + product.price,
		0
	);
	const isMobile = platform === "mobile";
	return (
		<>
			{isDialogOpen && (
				<Alert
					type="success"
					message="Your purchase has been successfully completed."
					buttonLabel="Close"
					onClickContinue={() => setIsDialogOpen(false)}
				/>
			)}
			<ShoppingCart
				isMobile={isMobile}
				header={<Header isMobile={isMobile} />}
				products={products}
				total={"R$ " + roundDecimalPlaces(total, 2)}
				onClickFinish={() => {
					dispatch(clearShoppingCart());
					setIsDialogOpen(true);
				}}
			/>
		</>
	);
}
