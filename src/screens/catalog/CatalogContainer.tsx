import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlatformContext } from "../../PlatformProvider";
import { ProductState, StoreStateType } from "../../store/states";
import {
	roundDecimalPlaces,
	uppercaseFirstLetter
} from "../../store/utils/helperFunctions";
import { getDisplay, searchPokemon } from "./../../api/endpoints";
import { addProduct } from "./../../store/reducers/shoppingCart/actions";
import { Alert } from "./../shared/Alert";
import { Catalog } from "./presentational/Catalog";
import { EmptyList } from "./presentational/EmptyList";
import { Header } from "./presentational/Header";
import { Product } from "./presentational/Product";
import { Products } from "./presentational/Products";

export function CatalogContainer() {
	const dispatch = useDispatch();
	const { platform } = React.useContext(PlatformContext);
	const isMobile = platform === "mobile";
	const [isAddedDialogOpen, setIsAddedDialogOpen] = React.useState(false);
	const [
		isAlreadyAddedDialogOpen,
		setIsAlreadyAddedDialogOpen
	] = React.useState(false);
	const shoppingCart = useSelector(
		(state: StoreStateType) => state.shoppingCart
	);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [searchResult, setSearchResult] = React.useState<{
		loading: boolean;
		products: ProductState[];
	}>({
		loading: true,
		products: []
	});
	React.useEffect(() => {
		(async function() {
			const products = await getDisplay();
			setSearchResult({
				loading: false,
				products
			});
		})();
	}, []);
	if (searchResult.loading) {
		return <div>Loading</div>;
	}
	const products = searchResult.products.map(product => (
		<Product
			id={product.id}
			imageUrl={product.imageUrl}
			name={uppercaseFirstLetter(product.name)}
			price={"R$ " + roundDecimalPlaces(product.price, 2)}
			onClickAdd={() => {
				const alreadyAdded = shoppingCart.find(
					shoppingCartProduct => shoppingCartProduct.id === product.id
				);
				if (alreadyAdded) {
					setIsAlreadyAddedDialogOpen(true);
					return;
				}
				dispatch(addProduct(product));
				if (isMobile) {
					setIsAddedDialogOpen(true);
				}
			}}
		/>
	));
	return (
		<>
			{isAddedDialogOpen && (
				<Alert
					type="success"
					message="This product was added to your cart."
					buttonLabel="Close"
					onClickContinue={() => setIsAddedDialogOpen(false)}
				/>
			)}
			{isAlreadyAddedDialogOpen && (
				<Alert
					type="alert"
					message="This product is already in your cart."
					buttonLabel="Close"
					onClickContinue={() => setIsAlreadyAddedDialogOpen(false)}
				/>
			)}
			<Catalog
				header={
					<Header
						isMobile={isMobile}
						inputRef={inputRef}
						enableShoppingCartButton={isMobile}
						shoppingCartCount={shoppingCart.length}
						onSubmit={event => {
							if (inputRef.current) {
								searchPokemon(inputRef.current.value).then(
									result => {
										setSearchResult({
											loading: false,
											products: result
										});
									}
								);
								setSearchResult({
									...searchResult,
									loading: true
								});
							}
							event.preventDefault();
							return false;
						}}
					/>
				}
				productsOrEmpty={
					products.length > 0 ? (
						<Products products={products} />
					) : (
						<EmptyList />
					)
				}
			/>
		</>
	);
}
