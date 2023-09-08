import { ProductItemImage } from "@/ui/components/atoms/ProductItemImage";
import { ProductItemDetails } from "@/ui/components/atoms/ProductItemDetails";
import { type ProductItemPropsType } from "@/types/ProductItem.types";

export const ProductItem = ({
	image,
	details,
}: ProductItemPropsType) => {
	return (
		<>
			<ProductItemImage {...image} />
			<ProductItemDetails {...details} />
		</>
	);
};
