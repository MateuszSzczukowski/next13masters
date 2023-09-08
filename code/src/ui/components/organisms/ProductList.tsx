import { ProductItem } from "../molecules/ProductItem";
import { type ProductItemPropsType } from "@/types/ProductItem.types";

export const ProductList = ({
	products,
}: {
	products: ProductItemPropsType[];
}) => {
	return (
		<ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{products.map((productItem) => (
				<li className="group relative" key={productItem.id}>
					<ProductItem {...productItem} />
				</li>
			))}
		</ul>
	);
};
